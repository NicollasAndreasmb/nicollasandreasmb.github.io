/* ============================================================================
 * modules/whatsapp-tooltip.js
 * ----------------------------------------------------------------------------
 * Exibe brevemente um balão de chamada ("Fale comigo") sobre o botão flutuante
 * do WhatsApp logo após o carregamento da página, recolhendo-o em seguida para
 * não atrapalhar a leitura.
 * ============================================================================ */

export function initWhatsappTooltip() {
  const float = document.getElementById("whatsapp-float");
  const tooltip = document.getElementById("whatsapp-tooltip");
  if (!float || !tooltip) return;

  const show = () => {
    tooltip.classList.add("show");
    setTimeout(() => tooltip.classList.remove("show"), 3800);
  };

  if (document.readyState === "complete") {
    setTimeout(show, 1600);
  } else {
    window.addEventListener("load", () => setTimeout(show, 1600));
  }
}
