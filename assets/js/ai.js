
// === AI de fotos no browser (CLIP zero-shot) ===
const AI_LABELS = [
  { text: "mold, mildew, damp, humidity stain", base:0.07, reason:"Humidade/bolor" },
  { text: "water leak, water stain, leakage",   base:0.06, reason:"Infiltrações/manchas de água" },
  { text: "peeling paint, flaking paint",       base:0.04, reason:"Tinta a descascar" },
  { text: "crack, cracks in wall or ceiling",   base:0.05, reason:"Fissuras visíveis" },
  { text: "rust, corrosion",                    base:0.03, reason:"Ferrugem/corrosão" }
];
const AI_MAX_IMAGE_DEDUCT = 0.25;

async function aiAnalyzePhotos(files, setStatus){
  if (!files || !files.length) return { deduct:0, reasons:['• Sem fotos: sem ajustes por condição.'] };
  try {
    setStatus?.('A carregar IA (1ª vez pode demorar)...');
    const { pipeline } = await import('https://cdn.jsdelivr.net/npm/@xenova/transformers@2.15.0');
    const clf = await pipeline('zero-shot-image-classification', 'Xenova/clip-vit-base-patch32');
    setStatus?.('A analisar fotos...');

    const subset = Array.from(files).slice(0,6);
    let total = 0, reasons = [];
    for (let i=0;i<subset.length;i++){
      setStatus?.(`A analisar fotos (${i+1}/${subset.length})...`);
      const img = await fileToImage(subset[i]);
      const canvas = document.createElement('canvas');
      canvas.width = img.naturalWidth || img.width;
      canvas.height = img.naturalHeight || img.height;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0);

      const res = await clf(canvas, AI_LABELS.map(l=>l.text));
      res.forEach((r, idx)=>{
        const w = Math.max(0.5, Math.min(1, r.score));
        const d = AI_LABELS[idx].base * w;
        if (r.score >= 0.35) { total += d; reasons.push(`• ${AI_LABELS[idx].reason}: -${(d*100|0)}% (conf.: ${(r.score*100|0)}%)`); }
      });
    }
    total = Math.min(AI_MAX_IMAGE_DEDUCT, total);
    setStatus?.('');
    if (!reasons.length) reasons.push('• Não foram detectados sinais claros de humidade/obras.');
    return { deduct: total, reasons };
  } catch (e) {
    setStatus?.('IA de fotos indisponível — cálculo sem análise de fotos.');
    return { deduct:0, reasons:['• IA de fotos indisponível no dispositivo.'] };
  }
}

function fileToImage(file){
  return new Promise((resolve,reject)=>{
    const fr = new FileReader();
    fr.onload = ()=>{ const img = new Image(); img.onload=()=>resolve(img); img.onerror=reject; img.src=fr.result; };
    fr.onerror = reject; fr.readAsDataURL(file);
  });
}
