var database = require("../database/config");

function buscarUltimasMedidas() {

    var instrucaoSql = `SELECT pontos as qtdPontos, count(pontos) as pontos_usuarios FROM pontuacao group by pontos;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarUltimasMedidas
}