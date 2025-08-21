// Simple Node.js server for the Imobiliária project.
// This server serves static files from the `public` directory and provides
// basic API endpoints for listing properties, fetching a single property
// by slug, and receiving lead submissions. It uses only built‑in modules
// to avoid external dependencies.

const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

// Load property data from JSON. In a real application this would
// come from a database. For the MVP we read the file synchronously
// at startup. To add new properties simply edit the JSON file in
// `data/properties.json`.
const propertiesPath = path.join(__dirname, 'data', 'properties.json');
let properties = [];
try {
  const data = fs.readFileSync(propertiesPath, 'utf8');
  properties = JSON.parse(data);
} catch (err) {
  console.error('Failed to load properties:', err);
  properties = [];
}

// Ensure leads file exists. When a lead is submitted via POST
// the server will append to this JSON array.
const leadsPath = path.join(__dirname, 'data', 'leads.json');
if (!fs.existsSync(leadsPath)) {
  fs.writeFileSync(leadsPath, '[]', 'utf8');
}

/**
 * Serve a static file from the public directory. If the file is
 * not found a 404 is returned. This helper sets basic content
 * types for HTML, CSS, JS, images and JSON.
 * @param {string} filepath Relative path within the public directory
 * @param {http.ServerResponse} res HTTP response object
 */
function serveStatic(filepath, res) {
  const ext = path.extname(filepath).toLowerCase();
  const contentType = {
    '.html': 'text/html; charset=utf-8',
    '.css': 'text/css; charset=utf-8',
    '.js': 'application/javascript; charset=utf-8',
    '.json': 'application/json; charset=utf-8',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon'
  }[ext] || 'application/octet-stream';
  const fullPath = path.join(__dirname, 'public', filepath);
  fs.readFile(fullPath, (err, data) => {
    if (err) {
      res.statusCode = 404;
      res.end('Not found');
      return;
    }
    res.setHeader('Content-Type', contentType);
    res.end(data);
  });
}

/**
 * Handle API requests. Supported endpoints:
 *  - GET /api/properties            → return all properties as JSON
 *  - GET /api/properties?county=... → filter properties by county
 *  - GET /api/properties/:slug      → return a single property by slug
 *  - POST /api/leads                → accept JSON body and append to leads file
 * @param {http.IncomingMessage} req HTTP request
 * @param {http.ServerResponse} res HTTP response
 */
function handleApi(req, res) {
  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;
  if (req.method === 'GET' && pathname === '/api/properties') {
    // Optionally filter by county or typology via query parameters.
    let result = properties;
    const { county, typology, q } = parsedUrl.query;
    if (county) {
      result = result.filter(p => p.location.county && p.location.county.toLowerCase() === county.toLowerCase());
    }
    if (typology) {
      result = result.filter(p => p.typology && p.typology.toLowerCase() === typology.toLowerCase());
    }
    if (q) {
      const term = q.toLowerCase();
      result = result.filter(p =>
        p.title.toLowerCase().includes(term) ||
        (p.location.county && p.location.county.toLowerCase().includes(term)) ||
        (p.location.district && p.location.district.toLowerCase().includes(term))
      );
    }
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    res.end(JSON.stringify(result));
    return;
  }
  // GET /api/properties/:slug
  if (req.method === 'GET' && pathname.startsWith('/api/properties/')) {
    const slug = pathname.split('/').pop();
    const property = properties.find(p => p.slug === slug);
    if (!property) {
      res.statusCode = 404;
      res.end(JSON.stringify({ error: 'Property not found' }));
      return;
    }
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    res.end(JSON.stringify(property));
    return;
  }
  // POST /api/leads
  if (req.method === 'POST' && pathname === '/api/leads') {
    let body = '';
    req.on('data', chunk => {
      body += chunk;
    });
    req.on('end', () => {
      try {
        const lead = JSON.parse(body);
        // Basic validation: ensure type and personal info exist.
        if (!lead || !lead.type || !lead.personal || !lead.personal.name) {
          throw new Error('Invalid lead data');
        }
        // Append to leads.json
        const existing = JSON.parse(fs.readFileSync(leadsPath, 'utf8'));
        existing.push({ ...lead, createdAt: new Date().toISOString() });
        fs.writeFileSync(leadsPath, JSON.stringify(existing, null, 2), 'utf8');
        res.setHeader('Content-Type', 'application/json; charset=utf-8');
        res.end(JSON.stringify({ ok: true }));
      } catch (err) {
        res.statusCode = 400;
        res.end(JSON.stringify({ error: 'Invalid request body' }));
      }
    });
    return;
  }
  res.statusCode = 404;
  res.end(JSON.stringify({ error: 'Endpoint not found' }));
}

// Create HTTP server
const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;
  // Serve API endpoints
  if (pathname.startsWith('/api/')) {
    handleApi(req, res);
    return;
  }
  // Serve root path as index.html
  if (pathname === '/' || pathname === '') {
    serveStatic('index.html', res);
    return;
  }
  // Serve other static files relative to public directory
  const sanitizedPath = pathname.replace(/^\//, '');
  serveStatic(sanitizedPath, res);
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});