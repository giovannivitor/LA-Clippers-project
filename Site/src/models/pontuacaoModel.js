var database = require("../database/config")

function registrar(pontos, fkUsuario) {
    var instrucao = `
    INSERT INTO Pontuacao (pontos, fkUsuario) VALUES ('${pontos}', '${fkUsuario}')`
    return database.executar(instrucao);
}

module.exports = {
    registrar
};