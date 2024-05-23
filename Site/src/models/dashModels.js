var database = require("../database/config");

function buscarUltimasMedidas() {

    var instrucaoSql = `SELECT pontos as qtdPontos, count(pontos) as pontos_usuarios FROM pontuacao group by pontos ORDER BY pontos DESC;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarUltimasMedida() {

    var instrucaoSql = `SELECT 
    ROUND(COUNT(CASE WHEN nota = 5 THEN 1 END) * 100.0 / COUNT(*), 2) AS porcentagem_5,
    ROUND(COUNT(CASE WHEN nota < 5 THEN 1 END) * 100.0 / COUNT(*), 2) AS quantidade_menos_5
FROM avaliacao;` ;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarUltimasMedidas,
    buscarUltimasMedida
}