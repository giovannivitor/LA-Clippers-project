const comecarQuiz = document.querySelector(".comecar-quiz")
const proximaPergunta = document.querySelector(".proxima-pergunta")
const retanguloPergunta = document.querySelector(".questao-container")
const pergunta = document.querySelector(".questao")
const retanguloResposta = document.querySelector(".resposta-container")
const resposta = document.querySelectorAll(".resposta")

const ID_USUARIO = Number(sessionStorage.getItem("ID_USUARIO"))

let perguntaAtual = 0
let totalCorretas = 0

comecarQuiz.addEventListener("click", comecarJogo)
proximaPergunta.addEventListener("click", displayProximaPergunta)

function comecarJogo() {
  comecarQuiz.classList.add("hide")
  retanguloPergunta.classList.remove("hide")
  displayProximaPergunta()
}

function displayProximaPergunta() {
  resetState()

  if (perguntas.length === perguntaAtual) {
    return finalizarQuiz()
  }

  pergunta.textContent = perguntas[perguntaAtual].pergunta
  perguntas[perguntaAtual].respostas.forEach(resposta => {
    const novaResposta = document.createElement("button")
    novaResposta.classList.add("button", "resposta")
    novaResposta.textContent = resposta.text
    if (resposta.correto) {
      novaResposta.dataset.correto = resposta.correto
    }
    retanguloResposta.appendChild(novaResposta)

    novaResposta.addEventListener("click", selecionarResposta)
  })
}

function resetState() {
  while (retanguloResposta.firstChild) {
    retanguloResposta.removeChild(retanguloResposta.firstChild)
  }

  document.body.removeAttribute("class")
  proximaPergunta.classList.add("hide")
}

function selecionarResposta(event) {
  const respostaClicada = event.target

  if (respostaClicada.dataset.correto) {
    document.body.classList.add("correto")
    totalCorretas++
  } else {
    document.body.classList.add("incorreto")
  }

  document.querySelectorAll(".resposta").forEach(button => {
    button.disabled = true

    if (button.dataset.correto) {
      button.classList.add("correto")
    } else {
      button.classList.add("incorreto")
    }
  })

  proximaPergunta.classList.remove("hide")
  perguntaAtual++
}

function redirecionar(){
  window.location.href = "metricas.html";
}

function finalizarQuiz() {
  const totaldeQuestoes = perguntas.length

  var mensagemFinal = ""
  if (totalCorretas >= 6) {
    mensagemFinal = "Excelente, você é um verdadeiro fã do Los Angeles Clippers!"
  }
  else if (totalCorretas >= 5) {
    mensagemFinal = "Muito bom, você é um grande fã do Clippers!"
  }
  else if (totalCorretas >= 3) {
    mensagemFinal = "Bom, você é um torcedor iniciante do Clippers"
  }
  else {
    mensagemFinal = "Péssimo, e você provavelmente torce para o Lakers"
  }

  retanguloPergunta.innerHTML =
    `
    <p class="mensagem-final">
      Você acertou ${totalCorretas} de ${totaldeQuestoes} questões!
      <span>Resultado: ${mensagemFinal}</span>
    </p>
    <button 
    onclick="redirecionar()"
    class="button"
  >
  Ver estatísticas 
    
  </button>
    <button 
      onclick=window.location.reload() 
      class="button-refazer"
    >
      Refazer Quiz
      
    </button>
    

  
  `
  fetch(`pontuacao/registrar/${ID_USUARIO}`, {
    method: "POST",
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify({
      pontosServer: totalCorretas
    })
  }).then(res => {
    console.log(res);
  })
  console.log(totalCorretas);

  fetch(`pontuacao/registrarPontosMax/${ID_USUARIO}`, {
    method: "POST",
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify({
      pontosServer: totalCorretas
    })
  }).then(res => {
    console.log(res);
  })
  console.log(totalCorretas);
}


const perguntas = [
  {
    pergunta: "Qual o jogador que não faz parte do atual elenco do Los Angeles Clippers?",
    respostas: [
      { text: "Paul George", correto: false },
      { text: "P.J.Tucker", correto: false },
      { text: "Blake Griffin", correto: true },
      { text: "Kobe Brown", correto: false }
    ]
  },
  {
    pergunta: "Como eram originalmente chamados os Los Angeles Clippers?",
    respostas: [
      { text: "Braves", correto: true },
      { text: "Bullets", correto: false },
      { text: "Bombers", correto: false },
      { text: "Clippers", correto: false }
    ]
  },
  {
    pergunta: 'Quantos títulos da NBA o Clippers tem?',
    respostas: [
      { text: '0', correto: true },
      { text: '13', correto: false },
      { text: '17', correto: false },
      { text: "1", correto: false }
    ]
  },
  {
    pergunta: 'O atual técnico do LA Clippers se chama Doc Rivers',
    respostas: [
      { text: "Verdadeiro", correto: false },
      { text: "Falso", correto: true }
    ]
  },
  {
    pergunta: 'Qual jogador que ingressou no time em 2019, e utiliza atualmente a camisa #13?',
    respostas: [
      { text: 'Kawhi Leonard', correto: false },
      { text: 'Paul Clifton Anthony George ', correto: true },
      { text: 'Ivica Zubac', correto: false },
      { text: 'Marlon Brandon Coelho Couto Silva', correto: false }
    ]
  },
  {
    pergunta: 'Em qual ano os Clippers se mudaram para Los Angeles e se tornaram os Los Angeles Clippers?',
    respostas: [
      { text: '2005', correto: false },
      { text: '1984', correto: true },
      { text: '1970', correto: false },
      { text: '1978', correto: false }
    ]
  },
  {
    pergunta: 'Qual foi o último jogador dos clippers a ganhar o prêmio de sexto homem do ano?',
    respostas: [
      { text: 'Lou Williams', correto: false },
      { text: 'Jamal Crawford', correto: false },
      { text: 'Eric Gordon', correto: false },
      { text: 'Montrezl Harrell', correto: true },
    ]
  },
]