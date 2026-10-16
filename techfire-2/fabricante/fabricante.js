/* =====================================================================
   PÁGINA INFORMAÇÕES DO FABRICANTE (fabricante.html)
   Normas da ANAC, do DECEA e da Anatel. O texto fica no próprio HTML.
   Aqui só o checklist antes do voo, salvo neste navegador.
   ===================================================================== */
iniciarPagina("fabricante", () => {
  const caixas = $$("#checkVoo input");
  const marcadas = store.get("gf_checklist_voo", []);
  caixas.forEach((c, i) => {
    c.checked = !!marcadas[i];
    c.addEventListener("change", () => store.set("gf_checklist_voo", caixas.map(x => x.checked)));
  });
  $("#limparCheck").addEventListener("click", () => {
    caixas.forEach(c => c.checked = false); store.del("gf_checklist_voo"); toast("Checklist limpo");
  });
});
