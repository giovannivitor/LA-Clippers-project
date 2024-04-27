function cadastrar() {
    aguardar();
  //Recupere o valor da nova input pelo nome do id
  // Agora vá para o método fetch logo abaixo
  var nomeVar = nome_input.value;
  var dtNascVar = dtNasc_input.value;
  var emailVar = email_input.value;
  var senhaVar = senha_input.value;
  var confirmacaoSenhaVar = confirmacao_senha_input.value;

  if (
    nomeVar == "" ||
    dtNascVar == "" ||
    emailVar == "" ||
    senhaVar == "" ||
    confirmacaoSenhaVar == "" 
  ) {
    cardErro.style.display = "block";
    mensagem_erro.innerHTML =
      "Mensagem de erro para todos os campos em branco";


    finalizarAguardar();
    return false;
  } else if (nomeVar.length <= 1) {
    cardErro.style.display = "block";
    mensagem_erro.innerHTML =
      "Mensagem de erro para o campo Nome";

    finalizarAguardar();
    return false;
  } else if (emailVar.indexOf('@') == -1 || emailVar.indexOf('.') == -1) {
    cardErro.style.display = "block";
    mensagem_erro.innerHTML =
      "Mensagem de erro para o campo email";

    finalizarAguardar();
    return false;

  } else if (senhaVar.length <= 6) {
    cardErro.style.display = "block";
    mensagem_erro.innerHTML =
      "Mensagem de erro para o campo Senha";

    finalizarAguardar();
    return false;
  } else if (confirmacaoSenhaVar != senhaVar) {
    cardErro.style.display = "block";
    mensagem_erro.innerHTML =
      "Mensagem de erro para o campo Confirmar Senha";

    finalizarAguardar();
    return false;
  } else {
    setInterval(sumirMensagem, 5000)
    window.location = "./login.html";
  }


  // Enviando o valor da nova input
  fetch("/usuarios/cadastrar", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      // crie um atributo que recebe o valor recuperado aqui
      // Agora vá para o arquivo routes/usuario.js
      nomeServer: nomeVar,
      dtNascServer: dtNascVar,
      emailServer: emailVar,
      senhaServer: senhaVar
    }),
  })
    .then(function (resposta) {
      console.log("resposta: ", resposta);


      if (resposta.ok) {
        cardErro.style.display = "block";

        mensagem_erro.innerHTML =
          "Cadastro realizado com sucesso! Redirecionando para tela de Login...";

        setTimeout(() => {
          window.location = "login.html";
        }, "2000");

        limparFormulario();
        finalizarAguardar();
      } else {
        throw "Houve um erro ao tentar realizar o cadastro!";
      }
    })
    .catch(function (resposta) {
      console.log(`#ERRO: ${resposta}`);
      finalizarAguardar();
    });

  return false;
}

function sumirMensagem() {
  cardErro.style.display = "none";
}