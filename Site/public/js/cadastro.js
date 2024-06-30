function validarSessao() {
  var email = sessionStorage.EMAIL_USUARIO;
  var nome = sessionStorage.NOME_USUARIO;

  var b_usuario = document.getElementById("b_usuario");

  if (email != null && nome != null) {
    b_usuario.innerHTML = nome;
  } else {
    window.location = "../login.html";
  }
}

function limparSessao() {
  sessionStorage.clear();
  window.location = "../login.html";
}

// carregamento (loading)
function aguardar() {
  var divAguardar = document.getElementById("div_aguardar");
  divAguardar.style.display = "flex";
}

function cadastrar() {
  aguardar();
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
    Swal.fire({
      icon: "error",
      title: "Erro...",
      background: "#1D1D1D",
      color: "#FFF",
      text: "CAMPO EM BRANCO",
    });

    finalizarAguardar();
    return false;
  } else if (nomeVar.length <= 1) {
    cardErro.style.display = "block";
    mensagem_erro.innerHTML =
      "Mensagem de erro para o campo Nome";

    finalizarAguardar();
    return false;
  } else if (emailVar.indexOf('@') == -1 || emailVar.indexOf('.') == -1) {
    Swal.fire({
      icon: "error",
      title: "Erro...",
      background: "#1D1D1D",
      color: "#FFF",
      text: "Email inválido",
    });
    finalizarAguardar();
    return false;

  } else if (senhaVar.length <= 6) {
    Swal.fire({
      icon: "error",
      title: "Erro...",
      background: "#1D1D1D",
      color: "#FFF",
      text: "Senha muito fraca. Necessário no mínimo 7 caracteres",
    });

    finalizarAguardar();
    return false;
  } else if (confirmacaoSenhaVar != senhaVar) {
    Swal.fire({
      icon: "error",
      title: "Erro...",
      background: "#1D1D1D",
      color: "#FFF",
      text: "Falha ao autenticar senha",
    });

    finalizarAguardar();
    return false;
  } else {
    fetch("/usuarios/cadastrar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nomeServer: nomeVar,
        dtNascServer: dtNascVar,
        emailServer: emailVar,
        senhaServer: senhaVar
      }),
    })
      .then(function (resposta) {
        console.log("resposta: ", resposta);


        if (resposta.ok) {
          Swal.fire({
            icon: "success",
            title: "Sucesso!",
            background: "#1D1D1D",
            color: "#FFF",
            text: "CADASTRO REALIZADO COM SUCESSO",
            showConfirmButton: false,
          });

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
  }

}