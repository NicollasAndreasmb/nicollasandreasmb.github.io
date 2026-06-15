/* ============================================================================
 * data/testimonials.js
 * ----------------------------------------------------------------------------
 * Fonte de dados dos depoimentos de clientes. Apenas entradas com approved:true
 * são exibidas no site; as demais ficam como rascunho até serem confirmadas com
 * o cliente real. Isso garante que nenhum depoimento fictício vá ao ar.
 *
 * Para publicar: preencha "quote", "author" e "role" com o texto real fornecido
 * pelo cliente e mude "approved" para true.
 * ============================================================================ */

export const testimonials = [
  {
    quote: "",
    author: "Maxcon Consórcios",
    role: "Cliente — projetos web e automações",
    approved: false,
  },
  {
    quote: "",
    author: "VLL",
    role: "Cliente — site de certificação digital",
    approved: false,
  },
  {
    quote: "",
    author: "Bothânica Floricultura",
    role: "Cliente — site institucional",
    approved: false,
  },
];
