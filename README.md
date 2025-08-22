# CasaPerfeita — pacote completo (regenerado)

Gerado em 2025-08-22T22:59:58.708992Z

## Conteúdo
- `index.html`, `404.html`
- `assets/css/app.css`, `assets/js/app.js`, `assets/js/ai.js`, `assets/img/`
- `data/properties.json` (200 imóveis fictícios com thumbs/urls)
- `.github/workflows/pages.yml` (minificação + deploy automático)

## Publicar no GitHub Pages
1. Cria um repositório e faz upload **de todo o conteúdo** desta pasta para `main`.
2. Em **Settings → Pages**, escolhe **Source: GitHub Actions**.
3. Cada push à `main` publica automaticamente.

## Dicas
- Lê os dados com `fetch('data/properties.json?v=' + Date.now())` (cache busting).
- Usa `showPropertyDetails(prop, kind)` para modal de detalhes.
- IA de fotos: `aiAnalyzePhotos(files, setStatus)` (usa canvas; funciona em mobile).
