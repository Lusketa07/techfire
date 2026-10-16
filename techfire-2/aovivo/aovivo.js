/* =====================================================================
   PÁGINA AO VIVO (aovivo.html)
   - Transmissão da câmera do drone (Twitch) → configurada na página Câmera
   - Telemetria do GPS → js/telemetria.js (página GPS)
   ===================================================================== */
iniciarPagina("aovivo", () => {
  Transmissao.iniciar($("#livePlayer"), CONFIG.aoVivo, $("#liveActions"));
  Telemetria.iniciar();
});
