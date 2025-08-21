// scripts.js
// Este ficheiro contém funções comuns utilizadas em várias páginas do site.

// Adiciona a classe 'active' no item de navegação que corresponde ao caminho atual.
document.addEventListener('DOMContentLoaded', () => {
  const path = window.location.pathname;
  const navLinks = document.querySelectorAll('nav a');
  navLinks.forEach(link => {
    if (link.getAttribute('href') === path) {
      link.classList.add('active');
    }
  });
});

// Função para ler parâmetros da query string
window.getQueryParams = function () {
  const params = {};
  const query = window.location.search.substring(1);
  const pairs = query.split('&');
  for (const pair of pairs) {
    if (!pair) continue;
    const [key, value] = pair.split('=');
    params[decodeURIComponent(key)] = decodeURIComponent(value || '');
  }
  return params;
};

// Função para formatar preços em EUR
window.formatCurrency = function (value) {
  return Number(value).toLocaleString('pt-PT', { style: 'currency', currency: 'EUR' });
};
