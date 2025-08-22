# CasaPerfeita — GitHub-ready (UI preservado)

Gerado em 2025-08-22T23:19:24.049377Z

## O que inclui
- `index.html` **original intacto** (UI preservado), com injeção de:
  - `assets/js/ai.js` (IA de fotos — CLIP zero-shot no browser, input canvas)
  - `assets/js/patches.js` (helpers seguros em `window.CP_*`)
- `data/properties.json` com **200 imóveis** (Lisboa/Porto com mais peso)
- `.github/workflows/pages.yml` para **deploy automático no GitHub Pages**
- `404.html` básico

## Publicar no GitHub Pages
1. Faz upload de **todo o conteúdo** desta pasta para a branch `main` do teu repositório.
2. Em **Settings → Pages**, define **Source: GitHub Actions**.
3. Faz um commit: o workflow publica automaticamente.

## Usar os patches
- Modal de detalhe: `window.CP_showPropertyDetails(prop, kind)`
- Exemplo de resposta do chatbot (preço correto): `window.CP_chatbotExample(props, 'comprar'|'arrendar')`
- IA de fotos: `window.CP_aiAnalyzePhotos(files, setStatus)`

> Mantivemos o teu UI exatamente como estava. Qualquer conflito com o teu JS é evitado com o namespace `CP_`.
