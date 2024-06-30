const ID_USUARIO = Number(sessionStorage.getItem("ID_USUARIO"))
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


var idadeMedia = 0;

fetch(`/pontuacao/puxar/${ID_USUARIO}`)
    .then(function (resposta) {

        console.log(resposta)
        resposta.json().then(function (resposta) {
            pontuacaoMax.innerHTML = resposta.pontuacao_maxima
        })
    });


fetch(`/usuarios/puxar`)
    .then(function (resposta) {

        resposta.json().then(function (resposta) {
            idade.innerHTML = resposta[0].media_idade
        })
    });
var qtdVezes = []
var pontos = []
var qtdVotos = []
var qtdVotosAbaixo = []
function obterDadosGrafico(idAquario) {

    fetch(`/dash/buscarUltimasMedidas`, { cache: 'no-store' }).then(function (response) {
        if (response.ok) {
            response.json().then(function (resposta) {
                console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);
                resposta.reverse();
                for (var i = 0; i < resposta.length; i++) {
                    var element = resposta[i]
                    qtdVezes.push(resposta[i].pontos_usuarios)
                    pontos.push(resposta[i].qtdPontos)
                }
                plotarGrafico(resposta);

            });
        } else {
            console.error('Nenhum dado encontrado ou erro na API');
        }
    })
        .catch(function (error) {
            console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
        });

    fetch(`/dash/buscarUltimasMedida`, { cache: 'no-store' }).then(function (response) {
        if (response.ok) {
            response.json().then(function (resposta) {
                console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);
                resposta.reverse();
                for (var i = 0; i < resposta.length; i++) {
                    var element = resposta[i]
                    qtdVotos.push(resposta[i].porcentagem_5)
                    qtdVotosAbaixo.push(resposta[i].quantidade_menos_5)
                }
                plotarGrafic(resposta);

            });
        } else {
            console.error('Nenhum dado encontrado ou erro na API');
        }
    })
        .catch(function (error) {
            console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
        });
}
function plotarGrafico(resposta, idAquario) {

    console.log('iniciando plotagem do gráfico...');

    let labels = [];

    const ctx = document.getElementById('myChart2');

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: pontos,
            datasets: [{
                data: qtdVezes,
                backgroundColor: '#C8102E',
                borderColor: 'red',
                Color: 'red',
                borderWidth: 1
            }],
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: false
                },
                datalabels: {
                    color: '#fff'
                }
            },
            scales: {
                y: {
                    ticks: {
                        color: '#fff'
                    }
                },
                x: {
                    ticks: {
                        color: '#fff'
                    }
                }
            }
        }
    });


    const myChart1 = document.getElementById('myChart1');

    new Chart(myChart1, {
        type: 'pie',
        data: {
            labels: ['Nota maxima', 'Nota abaixo'],
            datasets: [{
                data: [qtdVotos, qtdVotosAbaixo],
                backgroundColor: ['#224ea7', '#C8102E'], 
                borderColor: ['#303030'],
                borderWidth: 0.5
            }],
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top-left',
                    labels: {
                        color: '#fff'
                    }
                },
                datalabels: {
                    color: '#fff'
                }
            }
        }
    });
}
function sair() {
    sessionStorage.clear();
    window.open("login.html", "_self");
}