var database = require("../database/config")

function registrar(pontos, fkUsuario) {
    var instrucao = `
    INSERT INTO Pontuacao (pontos, fkUsuario) VALUES ('${pontos}', '${fkUsuario}')`
    return database.executar(instrucao);
}

function registrarPontosMax() {
    var instrucao = `
    SELECT fkUsuario, MAX(pontos) AS pontuacao_maxima
    FROM pontuacao
    GROUP BY fkUsuario;
    `
    return database.executar(instrucao);
}

module.exports = {
    registrar,
    registrarPontosMax
};