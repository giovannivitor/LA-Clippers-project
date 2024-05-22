var database = require("../database/config")

function registrar(nota, fkUsuario) {
    var instrucao = `
    INSERT INTO avaliacao (nota, fkUsuario) VALUES ('${nota}', '${fkUsuario}')`
    return database.executar(instrucao);
}

module.exports = {
    registrar
};