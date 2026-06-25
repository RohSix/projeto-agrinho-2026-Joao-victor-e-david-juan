 const perguntas = [
  {
    pergunta: "A fixação biológica de nitrogênio na soja ocorre principalmente por bactérias do gênero Rhizobium?",
    resposta: "sim"
  },
  {
    pergunta: "O Brasil é o maior produtor mundial de trigo?",
    resposta: "nao"
  },
  {
    pergunta: "O plantio direto reduz a erosão do solo?",
    resposta: "sim"
  },
  {
    pergunta: "O potássio é o principal nutriente responsável pelo crescimento das raízes?",
    resposta: "nao"
  },
  {
    pergunta: "A ferrugem-asiática afeta principalmente a cultura da soja?",
    resposta: "sim"
  },
  {
    pergunta: "O Cerrado brasileiro possui naturalmente solos ricos em nutrientes?",
    resposta: "nao"
  },
  {
    pergunta: "A Embrapa foi criada em 1973?",
    resposta: "sim"
  },
  {
    pergunta: "O milho pertence à família das leguminosas?",
    resposta: "nao"
  },
  {
    pergunta: "A integração lavoura-pecuária-floresta é conhecida pela sigla ILPF?",
    resposta: "sim"
  },
  {
    pergunta: "O fósforo é altamente móvel no solo tropical?",
    resposta: "nao"
  }
];

let atual = 0;
let vidas = 3;
let pontos = 0;

const pergunta = document.getElementById("pergunta");
const resultado = document.getElementById("resultado");
const vida = document.getElementById("vida");

mostrarPergunta();

function mostrarPergunta() {
  pergunta.textContent = perguntas[atual].pergunta;
}

function responder(escolha) {

  if (escolha === perguntas[atual].resposta) {
    pontos++;
    resultado.textContent = "✅ Acertou!";
  } else {
    vidas--;
    vida.textContent = "❤️ Vidas: " + vidas;
    resultado.textContent = "❌ Errou!";
  }

  if (vidas <= 0) {
    document.querySelector(".container").innerHTML = `
      <h1>💀 Fim de Jogo</h1>
      <p>Você fez ${pontos} ponto(s).</p>
      <br>
      <button onclick="location.reload()">Jogar Novamente</button>
    `;
    return;
  }

  atual++;

  if (atual >= perguntas.length) {
    document.querySelector(".container").innerHTML = `
      <h1>🏆 Parabéns!</h1>
      <p>Você acertou ${pontos} de ${perguntas.length} perguntas.</p>
      <br>
      <button onclick="location.reload()">Jogar Novamente</button>
    `;
    return;
  }

  setTimeout(() => {
    resultado.textContent = "";
    mostrarPergunta();
  }, 1000);
}