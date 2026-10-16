/* =====================================================================
   ÍCONES
   ===================================================================== */
const ICONS = {
  flame:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.07-2.14-.22-4.05 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.15.43-2.29 1-3a2.5 2.5 0 0 0 2.5 2.5z",
  thermo:"M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z",
  pin:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0ZM12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6z",
  bell:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9M10.3 21a1.94 1.94 0 0 0 3.4 0",
  db:"M3 5c0-1.7 4-3 9-3s9 1.3 9 3-4 3-9 3-9-1.3-9-3zM3 5v14c0 1.7 4 3 9 3s9-1.3 9-3V5M3 12c0 1.7 4 3 9 3s9-1.3 9-3",
  sun:"M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41",
  moon:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",
  play:"M6 3l14 9-14 9V3z",
  eye:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7ZM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z",
  mail:"M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zM22 6l-10 7L2 6",
  lock:"M5 11h14v10H5zM7 11V7a5 5 0 0 1 10 0v4",
  user:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z",
  users:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75",
  menu:"M4 6h16M4 12h16M4 18h16",
  battery:"M2 7h16v10H2zM22 11v2",
  wifi:"M5 12.55a11 11 0 0 1 14 0M8.5 16.43a6 6 0 0 1 7 0M12 20h.01M2 8.82a15 15 0 0 1 20 0",
  chip:"M6 6h12v12H6zM9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4",
  shield:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
  gamepad:"M6 12h4M8 10v4M15 13h.01M18 11h.01M17.32 5H6.68a4 4 0 0 0-3.98 3.59L2 15a3 3 0 0 0 5 2l2-2h6l2 2a3 3 0 0 0 5-2l-.7-6.41A4 4 0 0 0 17.32 5z",
  drone:"M3 6a3 3 0 1 0 6 0 3 3 0 1 0-6 0M15 6a3 3 0 1 0 6 0 3 3 0 1 0-6 0M3 18a3 3 0 1 0 6 0 3 3 0 1 0-6 0M15 18a3 3 0 1 0 6 0 3 3 0 1 0-6 0M10 10h4v4h-4zM8 8l2 2M16 8l-2 2M8 16l2-2M16 16l-2-2",
  tree:"M12 2 5 12h4l-3 5h12l-3-5h4zM12 17v5",
  building:"M4 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18M16 9h3a2 2 0 0 1 2 2v11M2 22h20M8 6h4M8 10h4M8 14h4",
  clock:"M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zM12 6v6l4 2",
  coins:"M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",
  radio:"M4.9 19.1a10 10 0 0 1 0-14.2M7.8 16.2a6 6 0 0 1 0-8.4M16.2 7.8a6 6 0 0 1 0 8.4M19.1 4.9a10 10 0 0 1 0 14.2M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4z",
  logout:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9",
  file:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zM14 2v6h6M8 13h8M8 17h8",
  zap:"M13 2 3 14h9l-1 8 10-12h-9l1-8z",
  mic:"M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3zM19 10v2a7 7 0 0 1-14 0v-2M12 19v3",
  speaker:"M11 5 6 9H2v6h4l5 4V5zM15.54 8.46a5 5 0 0 1 0 7.07M19.07 4.93a10 10 0 0 1 0 14.14",
  power:"M12 2v10M18.4 6.6a9 9 0 1 1-12.8 0",
  alert:"M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0zM12 9v4M12 17h.01",
  check:"M20 6 9 17l-5-5",
  ban:"M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zM4.9 4.9l14.2 14.2",
  heart:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",
  cloud:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",
  paw:"M11 6a2 2 0 1 0-4 0 2 2 0 0 0 4 0zM17 6a2 2 0 1 0-4 0 2 2 0 0 0 4 0zM21 11a2 2 0 1 0-4 0 2 2 0 0 0 4 0zM7 11a2 2 0 1 0-4 0 2 2 0 0 0 4 0zM8.5 18.5c0-2.5 1.5-5 3.5-5s3.5 2.5 3.5 5c0 1.5-1.5 2-3.5 1.5-2 .5-3.5 0-3.5-1.5z",
  id:"M3 5h18v14H3zM7 10h4M7 14h6M15 9h2v6h-2z",
  height:"M12 3v18M8 7l4-4 4 4M8 17l4 4 4-4",
  target:"M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zM22 12h-4M6 12H2M12 6V2M12 22v-4",
  search:"M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM21 21l-4.3-4.3",
  plane:"M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z",
  scale:"M12 3v18M7 21h10M3 7h18M6 7l-3 7a3 3 0 0 0 6 0zM18 7l-3 7a3 3 0 0 0 6 0z",
  house:"M3 10 12 3l9 7v11H3zM9 21v-6h6v6",
  arrow:"M5 12h14M13 5l7 7-7 7",
  link:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"
};
const icon = (n) => `<svg class="i" viewBox="0 0 24 24" aria-hidden="true"><path d="${ICONS[n] || ""}"/></svg>`;
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const esc = (s) => String(s).replace(/[&<>"']/g, c => ({ "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;" }[c]));
function fillIcons(root = document) { $$("[data-icon]", root).forEach(el => { el.innerHTML = icon(el.dataset.icon); el.removeAttribute("data-icon"); }); }
function toast(t) { const el = $("#toast"); el.textContent = t; el.classList.add("show"); clearTimeout(toast.t); toast.t = setTimeout(() => el.classList.remove("show"), 2600); }
const store = {
  get(k, d) { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch (e) { return d; } },
  set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} },
  del(k) { try { localStorage.removeItem(k); } catch (e) {} }
};

/* Caminho até a pasta principal do site.
   index.html usa "" ; páginas dentro de login/ e jogo/ usam "../" (definido em <body data-raiz="../">) */
const RAIZ = document.body.dataset.raiz || "";
/* Ajusta caminhos de arquivos do CONFIG (ex.: "videos/voo-01.mp4") para funcionar em qualquer pasta */
const caminho = (p) => !p || /^([a-z]+:|\/)/i.test(p) ? p : RAIZ + p;

/* Aviso que aparece na próxima página (ex.: "Conta criada" depois de ir para o início) */
function avisoDepois(t) { store.set("gf_aviso", t); }
function mostrarAvisoPendente() { const t = store.get("gf_aviso", null); if (t) { store.del("gf_aviso"); toast(t); } }

/* =====================================================================
   TEMA CLARO / ESCURO
   ===================================================================== */
function toggleTheme() {
  const next = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", next);
  try { localStorage.setItem("gf_tema", next); } catch (e) {}
}
function ativarTema() { $$("[data-theme-toggle]").forEach(b => b.addEventListener("click", toggleTheme)); }

/* =====================================================================
   SESSÃO (quem está logado)
   ===================================================================== */
const sessao = () => store.get("gf_sessao", null);
/* Manda para o login se a página exige conta. Retorna false quando redirecionou. */
/* A conta logada é a do dono do site (CONFIG.dono)? */
const ehDono = () => { const s = sessao(); return !!s && String(s.email).toLowerCase() === String(CONFIG.dono || "").toLowerCase(); };

function protegerPagina() {
  if (CONFIG.exigirLogin && !sessao()) { location.replace(RAIZ + "login/login.html"); return false; }
  return true;
}

/* =====================================================================
   AJUSTES SALVOS PELAS PÁGINAS CÂMERA E GPS
   Valem só neste navegador (para testar). Para valer para todos os
   visitantes, coloque os mesmos valores no js/config.js.
   ===================================================================== */
const ajustesLocais = () => store.get("gf_conexao", {});
(function aplicarAjustesLocais() {
  const a = ajustesLocais();
  if (a.twitchCanal) { CONFIG.aoVivo.tipo = "twitch"; CONFIG.aoVivo.twitchCanal = a.twitchCanal; }
})();

/* Blocos de código com botão "Copiar" (<pre class="code">) */
function ativarCopiar(root = document) {
  $$("pre.code", root).forEach(pre => {
    if (pre.querySelector(".copy")) return;
    const b = document.createElement("button");
    b.type = "button"; b.className = "copy"; b.textContent = "Copiar";
    b.addEventListener("click", async () => {
      const txt = pre.querySelector("code").innerText;
      try { await navigator.clipboard.writeText(txt); toast("Copiado!"); }
      catch (e) { toast("Selecione o texto e copie com Ctrl+C"); }
    });
    pre.appendChild(b);
  });
}
