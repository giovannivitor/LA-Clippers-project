var timeCampeaoModel = require("../models/timeCampeaoModel");


function buscarAquariosPorEmpresa(req, res) {
  var idUsuario = req.params.idUsuario;

  aquarioModel.buscarAquariosPorEmpresa(idUsuario).then((resultado) => {
    if (resultado.length > 0) {
      res.status(200).json(resultado);
    } else {
      res.status(204).json([]);
    }
  }).catch(function (erro) {
    console.log(erro);
    console.log("Houve um erro ao buscar os aquarios: ", erro.sqlMessage);
    res.status(500).json(erro.sqlMessage);
  });
}


function SalvarTimeCampeao(req, res) {
  var nomeTimeCampeao = req.body.nomeTimeServer;
  var idUsuario = req.params.idUsuario;


    timeCampeaoModel.SalvarTimeCampeao(nomeTimeCampeao, idUsuario)
      .then((resultado) => {
        res.status(201).send("Time campeão salvo com sucesso");
      }
      ).catch((erro) => {
        console.log(erro);
        console.log(
          "\nHouve um erro ao realizar o cadastro! Erro: ",
          erro.sqlMessage
        );
        res.status(500).json(erro.sqlMessage);
      });
  }


module.exports = {
  buscarAquariosPorEmpresa,
  SalvarTimeCampeao
}