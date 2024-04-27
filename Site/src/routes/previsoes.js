var express = require("express");
var router = express.Router();

var timeCampeaoController = require("../controllers/timeCampeaoController");

// router.get("/:empresaId", function (req, res) {
//   aquarioController.buscarAquariosPorEmpresa(req, res);
// });

router.post("/SalvarTimeCampeao/:idUsuario", function (req, res) {
  timeCampeaoController.SalvarTimeCampeao(req, res);
})

module.exports = router;