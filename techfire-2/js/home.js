/* =====================================================================
   PÁGINA INÍCIO (index.html) — primeira página do site, abre sem login
   ===================================================================== */

/* Endereços antigos (index.html#manual, #produto...) → páginas novas */
const ANTIGAS = {
  aovivo: "aovivo/aovivo.html", manual: "manual/manual.html", produto: "produto/produto.html",
  equipe: "equipe/equipe.html", referencias: "fabricante/fabricante.html", fabricante: "fabricante/fabricante.html",
  ux: "experiencia/experiencia.html", login: "login/login.html", cadastro: "login/cadastro.html", jogo: "jogo/jogo.html"
};
const destinoAntigo = ANTIGAS[location.hash.slice(1)];

/* Silhueta da mata no pé da abertura (árvores de alturas variadas) */
function desenharMata() {
  const el = $("#mata"); if (!el) return;
  let d = "", x = -10;
  while (x < 1210) {
    const w = 26 + Math.random() * 34, h = 60 + Math.random() * 110;
    d += `M${x} 200L${x + w / 2} ${200 - h}L${x + w} 200Z`;
    x += w * (0.45 + Math.random() * 0.3);
  }
  el.innerHTML = `<svg viewBox="0 0 1200 200" preserveAspectRatio="none" aria-hidden="true"><path d="${d}M0 186H1200V200H0Z"/></svg>`;
}

/* Brasas subindo na abertura */
function soltarBrasas() {
  const el = $("#brasas"); if (!el) return;
  el.innerHTML = Array.from({ length: 34 }, () => {
    const s = (2 + Math.random() * 4).toFixed(1);
    return `<i style="left:${(Math.random() * 100).toFixed(1)}%;width:${s}px;height:${s}px;animation-duration:${(6 + Math.random() * 8).toFixed(1)}s;animation-delay:-${(Math.random() * 14).toFixed(1)}s"></i>`;
  }).join("");
}

if (destinoAntigo) location.replace(destinoAntigo);
else iniciarPagina("home", () => {
  desenharMata();
  soltarBrasas();
  /* Quem ainda não entrou vê o botão de entrar na chamada final */
  if (!sessao()) $$("[data-so-visitante]").forEach(e => e.hidden = false);
}, true);
