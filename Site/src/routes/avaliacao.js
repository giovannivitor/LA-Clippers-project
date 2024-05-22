var express = require("express");
var router = express.Router();

var avaliacaoController = require("../controllers/avaliacaoController");

router.post("/registrar/:fkUsuario", function (req, res) {
    avaliacaoController.registrarDados(req, res);
})

module.exports = router;