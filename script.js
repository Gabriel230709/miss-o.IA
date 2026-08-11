const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
  {
    enunciado: "A IA deve ser regulada pelo governo?",
    alternativas: ["Sim", "Não", "Depende"],
  },
  {
    enunciado: "Quem deve responder por erros causados por uma IA?",
    alternativas: ["Desenvolvedores", "Usuários", "Empresas"],
  },
];

let indexAtual = 0;

function limparAlternativas() {
  caixaAlternativas.innerHTML = "";
}

function renderizarPergunta(i) {
  const p = perguntas[i];
  caixaPerguntas.textContent = p.enunciado;
  limparAlternativas();

  p.alternativas.forEach((alt, idx) => {
    const btn = document.createElement("button");
    btn.textContent = alt;
    btn.className = "alt-btn";
    btn.addEventListener("click", () => escolherAlternativa(idx));
    caixaAlternativas.appendChild(btn);
  });
  textoResultado.textContent = "";
}

function escolherAlternativa(idx) {
  const texto = `Você escolheu: ${perguntas[indexAtual].alternativas[idx]}`;
  textoResultado.textContent = texto;
  // desativa botões
  document.querySelectorAll('.alt-btn').forEach(b => b.disabled = true);

  // botão próxima
  const prox = document.createElement('button');
  prox.textContent = indexAtual < perguntas.length - 1 ? 'Próxima' : 'Finalizar';
  prox.className = 'prox-btn';
  prox.addEventListener('click', () => {
    indexAtual++;
    if (indexAtual < perguntas.length) renderizarPergunta(indexAtual);
    else mostrarFim();
  });
  caixaAlternativas.appendChild(prox);
}

function mostrarFim() {
  caixaPerguntas.textContent = 'Obrigado por participar!';
  limparAlternativas();
  textoResultado.textContent = '';
}

// inicializa
renderizarPergunta(indexAtual);