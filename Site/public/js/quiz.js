const comecarQuiz = document.querySelector(".start-quiz")
const proximaPergunta = document.querySelector(".next-question")
const retanguloPergunta = document.querySelector(".questions-container")
const pergunta = document.querySelector(".question")
const retanguloResposta = document.querySelector(".answers-container")
const resposta = document.querySelectorAll(".answer")

const ID_USUARIO = Number(sessionStorage.getItem("ID_USUARIO"))

let perguntaAtual = 0
let totalCorretas = 0

comecarQuiz.addEventListener("click", comecarJogo)
proximaPergunta.addEventListener("click", displayNextQuestion)

function comecarJogo() {
  comecarQuiz.classList.add("hide")
  retanguloPergunta.classList.remove("hide")
  displayNextQuestion()
}

function displayNextQuestion() {
  resetState()

  if (questions.length === perguntaAtual) {
    return finalizarQuiz()
  }

  pergunta.textContent = questions[perguntaAtual].question
  questions[perguntaAtual].answers.forEach(answer => {
    const newAsnwer = document.createElement("button")
    newAsnwer.classList.add("button", "answer")
    newAsnwer.textContent = answer.text
    if (answer.correct) {
      newAsnwer.dataset.correct = answer.correct
    }
    retanguloResposta.appendChild(newAsnwer)

    newAsnwer.addEventListener("click", selectAnswer)
  })
}

function resetState() {
  while (retanguloResposta.firstChild) {
    retanguloResposta.removeChild(retanguloResposta.firstChild)
  }

  document.body.removeAttribute("class")
  proximaPergunta.classList.add("hide")
}

function selectAnswer(event) {
  const respostaClicada = event.target

  if (respostaClicada.dataset.correct) {
    document.body.classList.add("correct")
    totalCorretas++
  } else {
    document.body.classList.add("incorrect")
  }

  document.querySelectorAll(".answer").forEach(button => {
    button.disabled = true

    if (button.dataset.correct) {
      button.classList.add("correct")
    } else {
      button.classList.add("incorrect")
    }
  })

  proximaPergunta.classList.remove("hide")
  perguntaAtual++
}

function finalizarQuiz() {
  const totaldeQuestoes = questions.length
  const performance = Math.floor(totalCorretas * 100 / totaldeQuestoes)

  let message = ""
    if (performance >= 90){
      message = "Excelente, você é um verdadeiro fã do Los Angeles Clippers!"
    }
    else if (performance >= 70){
      message = "Muito bom, você é um grande fã do Clippers!"
    }
    else if (performance >= 50){
      message = "Bom, você é um torcedor iniciante do Clippers"
    }
    else{
      message = "Péssimo, e você provavelmente torce para o Lakers"
    }

  retanguloPergunta.innerHTML =
    `
    <p class="final-message">
      Você acertou ${totalCorretas} de ${totaldeQuestoes} questões!
      <span>Resultado: ${message}</span>
    </p>
    <button 
      onclick=window.location.reload() 
      class="button"
    >
      Refazer teste
      
    </button>
    
    <a href="metricas.html">Ver estatisticas   
    </a>
  
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





const questions = [
  {
    question: "Qual o jogador que não faz parte do atual elenco do Los Angeles Clippers?",
    answers: [
      { text: "Paul George", correct: false },
      { text: "P.J.Tucker", correct: false },
      { text: "Blake Griffin", correct: true },
      { text: "Kobe Brown", correct: false }
    ]
  },
  {
    question: "Como eram originalmente chamados os Los Angeles Clippers?",
    answers: [
      { text: "Braves", correct: true },
      { text: "Bullets", correct: false },
      { text: "Bombers", correct: false },
      { text: "Clippers", correct: false }
    ]
  },
  {
    question: 'Quantos títulos da NBA o Clippers tem?',
    answers: [
      { text: '0', correct: true },
      { text: '13', correct: false },
      { text: '17', correct: false },
      { text: "1", correct: false }
    ]
  },
  {
    question: 'O atual técnico do LA Clippers se chama Doc Rivers',
    answers: [
      { text: "Verdadeiro", correct: false },
      { text: "Falso", correct: true }
    ]
  },
  {
    question: 'Qual jogador que ingressou no time em 2019, e utiliza atualmente a camisa #13?',
    answers: [
      { text: 'Kawhi Leonard', correct: false },
      { text: 'Paul Clifton Anthony George ', correct: true },
      { text: 'Ivica Zubac', correct: false },
      { text: 'Marlon Brandon Coelho Couto Silva', correct: false }
    ]
  },
  {
    question: 'Em qual ano os Clippers se mudaram para Los Angeles e se tornaram os Los Angeles Clippers?',
    answers: [
      { text: '2005', correct: false },
      { text: '1984', correct: true },
      { text: '1970', correct: false },
      { text: '1978', correct: false }
    ]
  },
  {
    question: 'Qual foi o último jogador dos clippers a ganhar o prêmio de sexto homem do ano?',
    answers: [
      { text: 'Lou Williams', correct: false },
      { text: 'Jamal Crawford', correct: false },
      { text: 'Eric Gordon', correct: false },
      { text: 'Montrezl Harrell', correct: true },
    ]
  },
]