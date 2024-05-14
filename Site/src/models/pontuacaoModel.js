var database = require("../database/config")

function registrar(pontos, fkUsuario) {
    var instrucao = `
    INSERT INTO Pontuacao (pontos, fkUsuario) VALUES ('${pontos}', '${fkUsuario}')`
    return database.executar(instrucao);
}

function registrarPontosMax(fkUsuario) {

    var instrucao = `
    SELECT MAX(pontos) AS pontuacao_maxima
    FROM pontuacao JOIN usuario ON fkUsuario = '${fkUsuario}';
    `
    return database.executar(instrucao);
}

module.exports = {
    registrar,
    registrarPontosMax
};