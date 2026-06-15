/* ============================================================================
 * modules/copy-email.js
 * ----------------------------------------------------------------------------
 * Permite copiar o endereço de e-mail para a área de transferência com um
 * clique, dando retorno visual temporário. Usa a API de clipboard quando
 * disponível e mantém o link mailto como alternativa caso ela não exista.
 * ============================================================================ */

export function initCopyEmail() {
  const button = document.getElementById("copy-email");
  if (!button) return;

  const email = button.dataset.email;
  const original = button.textContent;

  button.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(email);
      button.textContent = "E-mail copiado ✓";
      setTimeout(() => {
        button.textContent = original;
      }, 2000);
    } catch (error) {
      window.location.href = `mailto:${email}`;
    }
  });
}
