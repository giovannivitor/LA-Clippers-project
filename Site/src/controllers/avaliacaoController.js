var avaliacaoModel = require("../models/avaliacaoModel");

function registrarDados(req, res){
    var nota = req.body.avaliacaoServer
    var fkUsuario = req.params.fkUsuario

    avaliacaoModel.registrar(nota, fkUsuario)
        .then(
            function (resultado) {
                res.status(201).send({})
            }
        ) 
}

module.exports = {
    registrarDados
}