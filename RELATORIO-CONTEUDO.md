# Relatório de Conteúdo — Site NicollasDev

Este documento lista **cada assunto e texto** presente no site reconstruído,
o que foi **alterado** em relação à versão original e o que **sugiro revisar ou
acrescentar**. Use-o como checklist: os itens marcados com ⚠️ dependem de uma
confirmação sua antes da publicação.

> Onde mexer em cada texto: a tabela final do `README.md` mapeia seção → arquivo.

---

## 1. Identidade e cabeçalho

| Item | Valor atual | Observação |
| --- | --- | --- |
| Marca | **NicollasDev** | Mantida do original. |
| Nome completo | Nicollas Andreas (Marques Barros) | ⚠️ Confirmar grafia: **Nicollas** com dois "l". O site original já usava assim. |
| Cargo / role | **Desenvolvedor Full Stack** | No original a frase era "Desenvolvedor de Software". Padronizei com o README e o título da aba. ⚠️ Confirme qual prefere. |
| Domínio | nicollasdev.com.br | Mantido no `CNAME`. |

**Alterações feitas:** o cabeçalho antigo trazia os textos decorativos
"Site Portfolio" e "DEV. NICOLLAS ANDREAS". Foram removidos em favor de um
*hero* mais direto (nome + cargo + frase de apresentação + botões).

---

## 2. Apresentação (hero)

**Texto atual:**
> Estudante de Ciências da Computação que transforma ideias em sites, sistemas
> e automações. Foco em soluções funcionais, interfaces claras e código que
> faz sentido.

- **Origem:** reescrito a partir do tom do site original ("Desenvolvedor de Software" + "Olá, eu sou o Nicollas :)").
- **Sugestão:** opcionalmente acrescentar a cidade/região de atuação (ex.: "Atendimento em Jaboticabal e região, presencial e remoto") se quiser reforçar SEO local.

---

## 3. Serviços (SEÇÃO NOVA) 🆕

Seção criada do zero, derivada do que o `README.md` original já anunciava
("Sites personalizados • Suporte remoto e presencial • Sistemas sob demanda")
mas que **não existia** no site. São quatro cartões:

| Cartão | Texto | Status |
| --- | --- | --- |
| Sites personalizados | "Páginas institucionais e portfólios sob medida, responsivos e prontos para o seu público." | Texto de minha autoria ⚠️ revisar |
| Sistemas sob demanda | "Ferramentas web para resolver problemas reais: cálculos, cadastros e controle de dados." | Texto de minha autoria ⚠️ revisar |
| Automações | "Scripts em Python que eliminam tarefas repetitivas e organizam fluxos de trabalho." | Texto de minha autoria ⚠️ revisar |
| Suporte técnico | "Apoio remoto ou presencial para manutenção, ajustes e resolução de problemas." | Texto de minha autoria ⚠️ revisar |

**Sugestão:** se você cobra por esses serviços, considere acrescentar uma faixa
de preço, prazo médio ou um botão "Solicitar orçamento" ligado ao WhatsApp.

---

## 4. Experiências

### 4.1 Maxcon — Desenvolvedor Full Stack (PJ, Remoto)
- **Período:** Jan 2025 – Jul 2025 (mantido).
- **Texto:** mantido em essência; apenas enxugado.
- **Tecnologias:** Python, JavaScript, WordPress, MySQL.

### 4.2 Colaborador — Hackathons e Projetos Acadêmicos
- **Período:** 2019 – Presente. ⚠️ **Verificar:** 2019 é uma data anterior à
  graduação (iniciada em 2024) e ao curso técnico (2021). Se for o início da sua
  trajetória com tecnologia, ok; senão, ajuste o ano.
- **Texto:** mantido em essência.
- **Tecnologias:** Figma, WordPress, HTML5, CSS3.

**Sugestão de acréscimo:** se houver alguma experiência mais recente
(estágio, freelas, projetos da faculdade em 2025/2026), vale incluir como um
terceiro cartão para manter a trajetória atualizada.

---

## 5. Habilidades (barras de nível)

Os percentuais são **subjetivos** e foram herdados/ajustados do original.
Revise se refletem seu nível hoje:

| Skill | Original | Atual |
| --- | --- | --- |
| HTML5 | 85% | 90% |
| CSS3 | 85% | 88% |
| JavaScript | 60% | 70% |
| Python | 80% | 80% |
| MySQL | 65% | 65% |
| Figma | 70% | 75% |
| WordPress | 90% | 90% |

⚠️ Ajuste à vontade em `index.html` (atributo `data-level` de cada barra).
**Sugestão:** considerar adicionar Git/GitHub, já que o site roda lá.

---

## 6. Sobre mim

**Texto atual:** três parágrafos, reescritos a partir do original, mantendo a
frase de fechamento ("tecnologia sem empatia não funciona"), que tem
personalidade e vale manter.

**Correções aplicadas:**
- "Ciencias da Computação" → **Ciências da Computação** (acento).
- Pequenos ajustes de fluidez; nenhum fato alterado.

**Redes sociais (rodapé da seção):**

| Rede | Link | Status |
| --- | --- | --- |
| GitHub | github.com/NicollasAndreasmb | OK |
| LinkedIn | .../nicollas-andreas-marques-barros-131034263 | OK |
| Hugging Face | huggingface.co/NicollasMarques | ⚠️ confirmar usuário |
| Figma | figma.com/@nicollasandreas | ⚠️ **Provável correção necessária:** o link original apontava para uma URL interna de equipe (não pública). Coloquei um perfil público genérico que pode não existir. Substitua pelo seu perfil público do Figma ou remova o ícone. |

---

## 7. Projetos (portfólio)

Cinco projetos, agora centralizados em `js/data/projects.js` (editar lá atualiza
home e página de projetos ao mesmo tempo):

| Projeto | Link | Observação |
| --- | --- | --- |
| Combinador de Cartas de Crédito | maxconconsorcios.com.br/busque-cotas-imoveis | OK |
| Sistema de Estoque Financeiro | maxconconsorcios.com.br/cartas-contempladas | OK |
| Site de Certificação Digital | vllnet.com.br | OK |
| Site Institucional de Floricultura | bothanicafloricultura.com | OK |
| Aplicativo Educacional Infantil | — (protótipo) | Sem link; marcado como "Protótipo". ⚠️ Se tiver link do Figma público, vale adicionar. |

**Alterações:** descrições levemente reescritas para um tom mais uniforme;
ordem ajustada para começar pelos trabalhos com resultado público.
**Novo:** página `projetos.html` dedicada, com todos os projetos em grade.

**Sugestão:** adicionar 1–2 projetos recentes (os trabalhos de 2025/2026) e,
se possível, capturas de tela atualizadas — algumas imagens originais estavam
pesadas e foram comprimidas (sem perda visível).

---

## 8. Certificações e cursos

**Correções aplicadas:**
- "Técnico em **Infórmática**" → "Técnico em **Informática**".
- "**HackThon**" → "**Hackathon**" (nos dois itens).
- Reordenado para destacar a formação principal (graduação) no topo.

⚠️ **Texto encurtado:** o item de educação trazia o subtítulo longo
"— Como utilizá-la para melhorar o desempenho dos alunos?". Reduzi para
"Hackathon Tecnologia na Educação — Barão de Mauá". Diga se prefere restaurar o
título completo.

**Sugestão:** se houver certificados com link (PDF/credencial), transformar
cada item em link para comprovação.

---

## 9. Contato

- **Texto atual:** "Tem um projeto em mente? Conte sua ideia e vamos desenvolvê-la juntos."
- **Formulário:** mantido via FormSubmit, com envio assíncrono e mensagem de
  status acessível (sucesso/erro) — antes era um `alert()`.
- **E-mail de destino:** contatonicdev@gmail.com ⚠️ confirmar.
- **WhatsApp:** +55 14 99181-7771 ⚠️ confirmar número.

---

## 10. Rodapé e páginas de apoio

- **Rodapé:** copyright com ano automático + e-mail.
- **404:** página de erro nova, na mesma identidade visual.
- **SEO:** adicionados `meta description`, Open Graph, Twitter Card, `canonical`
  e dados estruturados (JSON-LD do tipo Person). ⚠️ A imagem de Open Graph
  aponta para `assets/img/nicollas.jpg`; troque por uma imagem de divulgação
  (1200×630) se quiser melhor aparência ao compartilhar o link.

---

## Resumo das correções de português aplicadas

| Onde | Antes | Depois |
| --- | --- | --- |
| Certificações | Infórmática | Informática |
| Sobre / Certificações | Ciencias | Ciências |
| Certificações | HackThon | Hackathon |

## Itens que dependem da sua confirmação (⚠️)

1. Cargo: "Full Stack" vs "de Software".
2. Data de início dos hackathons (2019).
3. Percentuais das barras de habilidade.
4. Link público do Figma (e do Hugging Face).
5. Título completo (ou curto) do Hackathon de Educação.
6. E-mail e número de WhatsApp.
7. Imagem de Open Graph para compartilhamento.
8. Possíveis projetos/experiências recentes a acrescentar.
