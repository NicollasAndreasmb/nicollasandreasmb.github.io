/**
 * Atualiza o ano no rodapé do site para o ano atual.
 */
document.getElementById('year').textContent = new Date().getFullYear();

/**
 * Objeto de termos de busca com redirecionamento para páginas específicas.
 * Permite buscas simples no campo #searchBox.
 */
const searchTerms = {
  // Sites Personalizados
  "wordpress": "sites-personalizados.html",
  "site": "sites-personalizados.html",
  "sites": "sites-personalizados.html",
  "landing page": "sites-personalizados.html",
  "site institucional": "sites-personalizados.html",
  "página web": "sites-personalizados.html",
  "criação de site": "sites-personalizados.html",
  "fazer site": "sites-personalizados.html",
  "desenvolvimento de site": "sites-personalizados.html",
  "web design": "sites-personalizados.html",
  "pagina personalizada": "sites-personalizados.html",
  "html": "sites-personalizados.html",
  "css": "sites-personalizados.html",
  "javascript": "sites-personalizados.html",
  "loja virtual": "sites-personalizados.html",
  "ecommerce": "sites-personalizados.html",
  "blog": "sites-personalizados.html",
  "portfolio": "sites-personalizados.html",
  "portfólio": "sites-personalizados.html",

  // Suporte Técnico
  "suporte": "suporte.html",
  "formatação": "suporte.html",
  "formatacao": "suporte.html",
  "formata": "suporte.html",
  "formatar": "suporte.html",
  "windows": "suporte.html",
  "manutenção": "suporte.html",
  "manutencao": "suporte.html",
  "atendimento": "suporte.html",
  "remoto": "suporte.html",
  "presencial": "suporte.html",
  "consultoria": "suporte.html",
  "tecnico": "suporte.html",
  "técnico": "suporte.html",
  "conserto": "suporte.html",
  "problema no pc": "suporte.html",
  "otimização": "suporte.html",
  "otimizacao": "suporte.html",
  "melhorar desempenho": "suporte.html",
  "computador lento": "suporte.html",
  "limpeza de sistema": "suporte.html",
  "formatar notebook": "suporte.html",
  "problema rede": "suporte.html",
  "internet lenta": "suporte.html",

  // Sistemas Sob Demanda
  "sistema": "sistemas.html",
  "sistemas": "sistemas.html",
  "web app": "sistemas.html",
  "automação": "sistemas.html",
  "automacao": "sistemas.html",
  "software": "sistemas.html",
  "programa": "sistemas.html",
  "sob demanda": "sistemas.html",
  "personalizado": "sistemas.html",
  "dashboard": "sistemas.html",
  "painel de controle": "sistemas.html",
  "rpa": "sistemas.html",
  "processos": "sistemas.html",
  "automatização": "sistemas.html",
  "projeto exclusivo": "sistemas.html",
  "crm": "sistemas.html",
  "sistema para empresa": "sistemas.html",
  "gestão": "sistemas.html",
  "controle financeiro": "sistemas.html",
  "fluxo de caixa": "sistemas.html",
  "controle de estoque": "sistemas.html",

  // Contato
  "contato": "contato.html",
  "fale comigo": "contato.html",
  "mensagem": "contato.html",
  "email": "contato.html",
  "e-mail": "contato.html",
  "gmail": "contato.html",
  "whatsapp": "contato.html",
  "zap": "contato.html",
  "linkedin": "contato.html",
  "currículo": "contato.html",
  "proposta": "contato.html",
  "contratar": "contato.html",
  "orcamento": "contato.html",
  "orçamento": "contato.html",
  "dúvida": "contato.html",
  "duvida": "contato.html",
  "telefone": "contato.html",
  "chamar": "contato.html",
  "suporte direto": "contato.html",

  // Home
  "inicio": "index.html",
  "início": "index.html",
  "home": "index.html",
  "principal": "index.html",
  "nicollas": "index.html",
  "serviços": "index.html",
  "sobre mim": "index.html",
  "quem sou": "index.html",
  "meus serviços": "index.html",
  "dev": "index.html",
  "portfólio": "index.html",
  "portfolio": "index.html"
};

/**
 * Evento para a busca no campo #searchBox.
 * Ao pressionar Enter, verifica se o termo digitado contém alguma chave do objeto searchTerms,
 * redirecionando para a página correspondente.
 * Se nada for encontrado, alerta o usuário.
 */
document.getElementById("searchBox").addEventListener("keypress", function(e) {
  if (e.key === "Enter") {
    const term = e.target.value.toLowerCase().trim();
    for (let key in searchTerms) {
      if (term.includes(key)) {
        window.location.href = searchTerms[key];
        return;
      }
    }
    alert("Nada encontrado. Tente outra palavra.");
  }
});

/**
 * Gerencia a troca dos temas (colorido, claro e escuro).
 * Mantém a escolha do usuário no localStorage.
 */
const themes = ["theme-colorido", "theme-claro", "theme-escuro"];
let currentThemeIndex = 0;

// Aplica tema salvo, se houver.
const savedTheme = localStorage.getItem('theme');
if (savedTheme && themes.includes(savedTheme)) {
  document.body.className = savedTheme;
  currentThemeIndex = themes.indexOf(savedTheme);
}

// Botão para alternar o tema
document.getElementById("accessibilityBtn").addEventListener("click", () => {
  currentThemeIndex = (currentThemeIndex + 1) % themes.length;
  const newTheme = themes[currentThemeIndex];
  document.body.className = newTheme;
  localStorage.setItem('theme', newTheme);
});

/**
 * Controle do menu hambúrguer mobile.
 * Adiciona/remover classe 'show' no menu.
 * Atualiza aria-label e title para acessibilidade.
 */
const menuToggle = document.getElementById('menuToggle');
const nav = document.querySelector('header nav');

menuToggle.addEventListener('click', () => {
  nav.classList.toggle('show');

  if(nav.classList.contains('show')) {
    menuToggle.setAttribute('aria-label', 'Fechar menu');
    menuToggle.setAttribute('title', 'Fechar menu');
  } else {
    menuToggle.setAttribute('aria-label', 'Abrir menu');
    menuToggle.setAttribute('title', 'Abrir menu');
  }
});

/**
 * Fecha o menu hambúrguer quando um link dentro do menu é clicado.
 * Melhora a experiência no mobile.
 */
nav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    if(nav.classList.contains('show')) {
      nav.classList.remove('show');
      menuToggle.setAttribute('aria-label', 'Abrir menu');
      menuToggle.setAttribute('title', 'Abrir menu');
    }
  });
});

/**
 * Envio de formulário via fetch para FormSubmit.co.
 * Mostra popup de sucesso ou alerta de erro.
 */
const serviceForm = document.getElementById('serviceForm');
if (serviceForm) {
  serviceForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    fetch("https://formsubmit.co/ajax/nicollasamb@gmail.com", {
      method: "POST",
      body: data,
      headers: { 'Accept': 'application/json' }
    })
    .then(response => {
      if (response.ok) {
        document.getElementById('popup').style.display = 'block';
        setTimeout(() => {
          document.getElementById('popup').style.display = 'none';
          form.reset();
        }, 3000);
      } else {
        alert("Erro ao enviar. Tente novamente.");
      }
    })
    .catch(() => {
      alert("Erro na conexão. Verifique sua internet.");
    });
  });
}
