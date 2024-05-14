var pontuacaoModel = require("../models/pontuacaoModel");

function registrarDados(req, res){
    var pontos = req.body.pontosServer
    var fkUsuario = req.params.fkUsuario

    pontuacaoModel.registrar(pontos, fkUsuario)
        .then(
            function (resultado) {
                res.status(201).send({})
            }
        ) 
}

function puxarDados(req, res){
    var fkUsuario = req.params.idUsuario
    
    pontuacaoModel.registrarPontosMax(fkUsuario)
        .then(
            function (resultado) {
                res.status(201).send(resultado[0])
            }
        ) 
}

module.exports = {
    registrarDados,
    puxarDados
}