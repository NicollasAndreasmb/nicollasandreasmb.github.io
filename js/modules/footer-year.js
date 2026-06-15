/* ============================================================================
 * modules/footer-year.js
 * ----------------------------------------------------------------------------
 * Atualiza o ano exibido no rodapé para o ano corrente, evitando manutenção
 * manual da data de copyright.
 * ============================================================================ */

export function initFooterYear() {
  const target = document.getElementById("year");
  if (target) target.textContent = String(new Date().getFullYear());
}
