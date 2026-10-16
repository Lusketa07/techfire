/* =====================================================================
   TELEMETRIA — GPS, bateria, altitude e velocidade do drone
   O site não usa banco de dados: os dados são fixos ou simulados.
   CONFIG.telemetria = "parado"   → drone ligado, parado em CONFIG.mapa, bateria 100%
   CONFIG.telemetria = "simulada" → simulação de voo ao redor de CONFIG.mapa

   Qualquer elemento com data-tel="..." é atualizado sozinho:
   status, bat, alt, vel, sinal, gps, sat, hora, fonte, local
   ===================================================================== */
const Telemetria = {
  dados: { lat: CONFIG.mapa.lat, lon: CONFIG.mapa.lon, alt: 60, vel: 8, bateria: 100, satelites: null, status: "Em voo" },
  fonte: "parado",            // "parado" | "simulada"
  ouvintes: [],

  /* Chama fn(dados, fonte) a cada atualização */
  ao(fn) { this.ouvintes.push(fn); },

  iniciar() {
    if (this.timer) return;
    this.atualizar();
    this.timer = setInterval(() => this.atualizar(), 2000);
  },

  atualizar() {
    if (CONFIG.telemetria === "simulada") { this.simular(); this.fonte = "simulada"; }
    else { this.estacionar(); this.fonte = "parado"; }
    this.mostrar();
    this.ouvintes.forEach(fn => fn(this.dados, this.fonte));
  },

  simular() {
    const d = this.dados;
    d.bateria = Math.max(15, (d.bateria ?? 100) - .1);
    d.alt = 58 + Math.round(Math.random() * 5);
    d.vel = 7 + Math.round(Math.random() * 3);
    d.lat += (Math.random() - .5) * .0004; d.lon += (Math.random() - .5) * .0004;
    d.satelites = 9; d.status = "Em voo";
  },

  /* Drone ligado e parado no lugar de CONFIG.mapa, com a bateria cheia */
  estacionar() {
    Object.assign(this.dados, {
      lat: CONFIG.mapa.lat, lon: CONFIG.mapa.lon, alt: 0, vel: 0,
      bateria: 100, satelites: null, status: "Ligado"
    });
  },

  mostrar() {
    const d = this.dados, sim = this.fonte === "simulada";
    const vals = {
      status: d.status,
      bat: Math.round(d.bateria) + "%",
      alt: Math.round(d.alt) + " m",
      vel: Math.round(d.vel) + " km/h",
      local: "Estamos no " + CONFIG.mapa.local,
      sinal: sim ? "Simulação" : "4G",
      gps: d.lat.toFixed(5) + ", " + d.lon.toFixed(5),
      sat: d.satelites == null ? "--" : d.satelites,
      hora: "agora",
      fonte: sim ? "Dados simulados de voo." : "Drone ligado, parado no " + CONFIG.mapa.local + "."
    };
    $$("[data-tel]").forEach(el => { const k = el.dataset.tel; if (k in vals) el.textContent = vals[k]; });
    $$("[data-tel-pill]").forEach(el => {
      el.className = "pill " + (sim ? "warn" : "ok");
      el.textContent = sim ? "Simulação" : "Ligado";
    });
  }
};
