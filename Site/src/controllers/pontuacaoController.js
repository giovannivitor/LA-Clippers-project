var pontuacaoModel = require("../models/pontuacaoModel");

function registrarDados(req, res){
    var pontos = req.body.pontosServer
    var fkUsuario = req.params.fkUsuario

    pontuacaoModel.registrar(pontos, fkUsuario)
        .then(
            function (resultado) {
                res.status(201).send("ai ai")
            }
        ) //.catch(
          //  function (erro) {
          //      c
          //  }
        //)
}

module.exports = {
    registrarDados
}