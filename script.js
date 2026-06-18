const perguntasIniciais = [
  { pergunta: "O agronegócio produz alimentos e matérias-primas?", correta: "sim" },
  { pergunta: "O solo não precisa de cuidados para produzir sempre?", correta: "nao" },
  { pergunta: "A agricultura familiar é importante para o Brasil?", correta: "sim" },
  { pergunta: "Desmatamento ajuda o meio ambiente?", correta: "nao" },
  { pergunta: "Tecnologia ajuda a produção no campo?", correta: "sim" },
  { pergunta: "A irrigação ajuda em regiões secas?", correta: "sim" },
  { pergunta: "Agro é só plantar sem planejamento?", correta: "nao" },
  { pergunta: "O clima influencia a agricultura?", correta: "sim" }
];

// 🔥 lista que vai sendo esvaziada
let perguntas = [...perguntasIniciais];

let perguntaAtual = {};
let vida = 3;

function atualizarVida() {
  document.getElementById("vida").innerText = "❤️ Vidas: " + vida;
}

function novaPergunta() {
  // 🛑 se acabou as perguntas, reinicia lista
  if (perguntas.length === 0) {
    perguntas = [...perguntasIniciais];
  }

  const index = Math.floor(Math.random() * perguntas.length);
  perguntaAtual = perguntas[index];

  // ❌ remove pergunta para não repetir
  perguntas.splice(index, 1);

  document.getElementById("pergunta").innerText = perguntaAtual.pergunta;
  document.getElementById("resultado").innerText = "";
}

function gameOver() {
  document.getElementById("resultado").innerText = "💀 GAME OVER! Reiniciando...";

  setTimeout(() => {
    location.reload();
  }, 1500);
}

function responder(resposta) {
  if (resposta === perguntaAtual.correta) {
    document.getElementById("resultado").innerText = "✔ CORRETO! 🌱";
  } else {
    vida--;
    atualizarVida();
    document.getElementById("resultado").innerText = "❌ ERRADO! Perdeu uma vida 🚫";
  }

  if (vida <= 0) {
    gameOver();
    return;
  }

  setTimeout(() => {
    novaPergunta();
  }, 1200);
}

// iniciar
novaPergunta();
atualizarVida();