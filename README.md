# CasaPerfeita — pacote completo

Gerado em 2025-08-22T21:29:59.292802Z

## Conteúdo
- `index.html`, `404.html`
- `assets/css/app.css`, `assets/js/app.js`, `assets/js/ai.js`, `assets/img/`
- `data/properties.json` (200 imóveis fictícios realistas, com thumbs/urls)
- `.github/workflows/pages.yml` (minificação + deploy automático)

## Publicar no GitHub Pages
1. Cria um repositório e faz upload **de todo o conteúdo** desta pasta para `main`.
2. Em **Settings → Pages**, escolhe **Source: GitHub Actions** (ou deixa o workflow tratar).
3. Cada push à `main` publica automaticamente.

## Como usar no código
- Lê os dados com `fetch('data/properties.json?v=' + Date.now())`.
- Usa `showPropertyDetails(prop, kind)` para abrir o modal com detalhes.
- IA de fotos: chama `aiAnalyzePhotos(files, setStatus)` (usa canvas, funciona em mobile).

Boa construção! 🚀
