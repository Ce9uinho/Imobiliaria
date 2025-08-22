
// === CasaPerfeita patches (safe namespace) ===
(function(){
  const fmtEUR = (n) => Number(n || 0).toLocaleString('pt-PT', { style: 'currency', currency: 'EUR' });

  function getMedia(prop) {
    const m = (prop && prop.media && prop.media[0]) || {};
    const thumb = m.thumb || m.url || `https://picsum.photos/seed/${prop?.id || 'home'}/420/280`;
    const url = m.url || thumb;
    return { thumb, url };
  }

  function conditionBadge(cond) {
    if (!cond) return '';
    const map = {
      'Renovado': 'bg-green-100 text-green-700',
      'Bom': 'bg-emerald-100 text-emerald-700',
      'Usado': 'bg-amber-100 text-amber-700',
      'A precisar de obras': 'bg-red-100 text-red-700',
      'Devoluto': 'bg-gray-100 text-gray-700'
    };
    const cls = map[cond] || 'bg-gray-100 text-gray-700';
    return `<span class="text-xs px-2 py-1 rounded ${cls}">${cond}</span>`;
  }

  // Expor helpers
  window.CP_fmtEUR = fmtEUR;
  window.CP_getMedia = getMedia;
  window.CP_conditionBadge = conditionBadge;

  // Modal de detalhe (não interfere com o teu modal se já existir)
  window.CP_showPropertyDetails = function(prop, kind){
    const { url, thumb } = getMedia(prop);
    const priceStr = kind === 'rent' ? `${fmtEUR(prop.price)}/mês` : fmtEUR(prop.price);
    const extras = [
      prop.bedrooms ? `${prop.bedrooms} quartos` : null,
      prop.bathrooms ? `${prop.bathrooms} wc` : null,
      prop.typology ? prop.typology : null,
      `${prop.area} m²`,
      (Number.isFinite(prop.floor) && prop.typology !== 'Moradia') ? `${prop.floor}º andar` : null,
      prop.parking_spots ? `${prop.parking_spots} estacionamento` : null,
      prop.energy ? `Energia ${prop.energy}` : null,
    ].filter(Boolean).join(' · ');
    const fees = [
      (kind === 'buy' && prop.condo_fee > 0) ? `Condomínio: ${fmtEUR(prop.condo_fee)}` : null,
      prop.condition ? `Estado: ${prop.condition}` : null,
      prop.yearBuilt ? `Ano: ${prop.yearBuilt}` : null,
    ].filter(Boolean).join(' | ');

    // Se existir um content target com este id, usa-o; senão, cria um básico
    let target = document.querySelector('#propertyModalBody');
    if (!target) {
      const modal = document.createElement('div');
      modal.id = 'propertyModal';
      modal.className = 'modal';
      modal.innerHTML = `<div class="modal-content"><button class="close-modal">&times;</button><div id="propertyModalBody"></div></div>`;
      document.body.appendChild(modal);
      target = modal.querySelector('#propertyModalBody');
      modal.querySelector('.close-modal').addEventListener('click', ()=> modal.style.display='none');
    }
    const html = `
      <div class="p-0">
        <img src="${url}" onerror="this.src='${thumb}'" class="w-full h-64 object-cover rounded-t-xl" alt="${prop.title || 'Imóvel'}">
        <div class="p-4">
          <div class="flex items-center justify-between">
            <h3 class="text-xl font-bold">${prop.title || prop.typology}</h3>
            <div class="text-2xl font-extrabold">${priceStr}</div>
          </div>
          <p class="text-gray-500">${prop.location?.city || ''}${prop.location?.district ? ', ' + prop.location.district : ''}</p>
          <div class="mt-2">${conditionBadge(prop.condition)}</div>
          <p class="mt-2 text-sm text-gray-700">${extras}</p>
          ${fees ? `<p class="mt-1 text-xs text-gray-500">${fees}</p>` : ''}
          <p class="mt-3 text-gray-700">${prop.description || ''}</p>
        </div>
      </div>`;
    target.innerHTML = html;
    const modal = document.querySelector('#propertyModal') || target.closest('.modal');
    if (modal) modal.style.display = 'block';
  };

  // Chatbot exemplo com preço correto
  window.CP_chatbotExample = function(properties, type){
    if (!properties?.length) return "Não encontrei resultados para já. Quer tentar com outros filtros?";
    const p = properties[Math.floor(Math.random() * properties.length)];
    const isRent = (type?.toLowerCase() === 'arrendar' || type?.toLowerCase() === 'rent');
    const priceStr = isRent ? `${fmtEUR(p.price)}/mês` : fmtEUR(p.price);
    const city = p.location?.city || p.location || '';
    return `Encontrámos ${properties.length} ${type}s. Exemplo: "${p.title}" em ${city} por ${priceStr}. Queres ver mais detalhes?`;
  };

  // Menu mobile: liga uma única vez se ainda não estiver ligado
  document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileNav = document.getElementById('mobileNav');
    if (mobileMenuBtn && mobileNav && !mobileMenuBtn.dataset.cpBound) {
      mobileMenuBtn.addEventListener('click', () => mobileNav.classList.toggle('hidden'));
      mobileMenuBtn.dataset.cpBound = '1';
    }
  });
})();
