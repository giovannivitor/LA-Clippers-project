var pontuacaoModel = require("../models/pontuacaoModel");

function registrarDados(req, res){
    var pontos = req.body.pontosServer
    var fkUsuario = req.params.fkUsuario

    pontuacaoModel.registrar(pontos, fkUsuario)
        .then(
            function (resultado) {
                res.status(201).send("ai ai")
            }
        ) 
}

function puxarDados(req, res){
    pontuacaoModel.registrarPontosMax()
    .then(function(result){
        res.status(200).json(result)
    }).catch(function(error){
        console.log(error);
    })
}

module.exports = {
    registrarDados,
    puxarDados
}