const ID_USUARIO = Number(sessionStorage.getItem("ID_USUARIO"))
var avaliacao = 0
if (sessionStorage.length <= 0) {


} else {
    var nome = '';

    for (var contadorLetras = 0; contadorLetras < sessionStorage.NOME_USUARIO.length; contadorLetras++) {
        if (sessionStorage.NOME_USUARIO[contadorLetras] == ' ') {
            contadorLetras = sessionStorage.NOME_USUARIO.length;
            break;
        }

        nome += sessionStorage.NOME_USUARIO[contadorLetras];
    }

    nome_usuario.innerHTML = `Olá, ${(nome)}!`;
}
function estrela1() {
    avaliacao = 1;
    for (var contadorEstrela = 1; contadorEstrela <= 5; contadorEstrela++) {
        var idEstrela = document.getElementById(`star${contadorEstrela}`);
        if (contadorEstrela <= avaliacao) {
            idEstrela.innerHTML = `<img class="star" src="assets/EstrelaAmarela.png" alt="">`;
        } else {
            idEstrela.innerHTML = `<img class="star" src="assets/EstrelaApagada.png" alt="">`;
        }
    }
}
function estrela2() {
    avaliacao = 2;
    for (var contadorEstrela = 1; contadorEstrela <= 5; contadorEstrela++) {
        var idEstrela = document.getElementById(`star${contadorEstrela}`);
        if (contadorEstrela <= avaliacao) {
            idEstrela.innerHTML = `<img class="star" src="assets/EstrelaAmarela.png" alt="">`;
        } else {
            idEstrela.innerHTML = `<img class="star" src="assets/EstrelaApagada.png" alt="">`;
        }
    }
}
function estrela3() {
    avaliacao = 3;
    for (var contadorEstrela = 1; contadorEstrela <= 5; contadorEstrela++) {
        var idEstrela = document.getElementById(`star${contadorEstrela}`);
        if (contadorEstrela <= avaliacao) {
            idEstrela.innerHTML = `<img class="star" src="assets/EstrelaAmarela.png" alt="">`;
        } else {
            idEstrela.innerHTML = `<img class="star" src="assets/EstrelaApagada.png" alt="">`;
        }
    }
}
function estrela4() {
    avaliacao = 4;
    for (var contadorEstrela = 1; contadorEstrela <= 5; contadorEstrela++) {
        var idEstrela = document.getElementById(`star${contadorEstrela}`);
        if (contadorEstrela <= avaliacao) {
            idEstrela.innerHTML = `<img class="star" src="assets/EstrelaAmarela.png" alt="">`;
        } else {
            idEstrela.innerHTML = `<img class="star" src="assets/EstrelaApagada.png" alt="">`;
        }
    }
}
function estrela5() {
    avaliacao = 5;
    for (var contadorEstrela = 1; contadorEstrela <= 5; contadorEstrela++) {
        var idEstrela = document.getElementById(`star${contadorEstrela}`);
        if (contadorEstrela <= avaliacao) {
            idEstrela.innerHTML = `<img class="star" src="assets/EstrelaAmarela.png" alt="">`;
        } else {
            idEstrela.innerHTML = `<img class="star" src="assets/EstrelaApagada.png" alt="">`;
        }
    }
}

function enviarAvaliacao() {
    if (avaliacao >= 1) {
        div_mensagem.innerHTML = `<h4>Você avaliou o site com a nota ${avaliacao}</h4>`
    }
    else {
        div_mensagem.innerHTML = `<h4>Avaliação invalida</h4>`
    }

    fetch(`avaliacao/registrar/${ID_USUARIO}`, {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            avaliacaoServer: avaliacao
        })
    }).then(res => {
        console.log(res);
    })
    console.log(avaliacao);
}

function sair() {
    sessionStorage.clear();
    window.open("login.html", "_self");
}