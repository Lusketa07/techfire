/* =====================================================================
   PÁGINA CONEXÃO › GPS (gps.html)
   Mapa (Leaflet) com a posição do drone (js/telemetria.js).
   ===================================================================== */
let mapa = null, marcador = null, rastro = null;
const MAX_PONTOS = 300;

function iniciarMapa() {
  const { lat, lon } = Telemetria.dados;
  if (!window.L) {   // Leaflet não carregou (sem internet?) → mapa simples
    const dlt = .01;
    $("#mapa").innerHTML = `<iframe title="Mapa" style="width:100%;height:100%;border:0" src="https://www.openstreetmap.org/export/embed.html?bbox=${lon - dlt}%2C${lat - dlt}%2C${lon + dlt}%2C${lat + dlt}&layer=mapnik&marker=${lat}%2C${lon}"></iframe>`;
    return;
  }
  mapa = L.map("mapa").setView([lat, lon], 16);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", { maxZoom: 19, attribution: "© OpenStreetMap" }).addTo(mapa);
  rastro = L.polyline([], { color: "#E2362B", weight: 3, opacity: .7 }).addTo(mapa);
  marcador = L.circleMarker([lat, lon], { radius: 9, color: "#fff", weight: 3, fillColor: "#E2362B", fillOpacity: 1 }).addTo(mapa).bindTooltip("Estamos no " + CONFIG.mapa.local, { permanent: true, direction: "top", offset: [0, -10] });
}

function moverDrone(d) {
  $("#linkMaps").href = `https://www.google.com/maps?q=${d.lat},${d.lon}`;
  if (!mapa) return;
  const p = [d.lat, d.lon];
  marcador.setLatLng(p);
  const pts = rastro.getLatLngs();
  const ult = pts[pts.length - 1];
  if (!ult || ult.lat !== d.lat || ult.lng !== d.lon) { rastro.addLatLng(p); if (pts.length > MAX_PONTOS) rastro.setLatLngs(pts.slice(-MAX_PONTOS)); }
  if ($("#seguir").checked) mapa.panTo(p, { animate: true });
}

iniciarPagina("conexao", () => {
  montarSubmenu("gps");
  iniciarMapa();
  Telemetria.ao(moverDrone);
  Telemetria.iniciar();

  $("#centralizar").addEventListener("click", () => { if (mapa) mapa.setView([Telemetria.dados.lat, Telemetria.dados.lon], 17); });
});
