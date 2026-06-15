/* ============================================================================
 * projeto.js
 * ----------------------------------------------------------------------------
 * Ponto de entrada da página de estudo de caso de um projeto. Reaproveita os
 * módulos compartilhados (tema, navegação, fundo, rodapé) e renderiza o
 * conteúdo do projeto indicado na URL.
 * ============================================================================ */

import { initTheme } from "./modules/theme.js";
import { initPreloader } from "./modules/preloader.js";
import { initNavigation } from "./modules/navigation.js";
import { initNeuralBackground } from "./modules/neural-background.js";
import { initProjectDetail } from "./modules/project-detail.js";
import { initWhatsappTooltip } from "./modules/whatsapp-tooltip.js";
import { initFooterYear } from "./modules/footer-year.js";

document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initPreloader();
  initNavigation();
  initNeuralBackground();
  initProjectDetail();
  initWhatsappTooltip();
  initFooterYear();
});
