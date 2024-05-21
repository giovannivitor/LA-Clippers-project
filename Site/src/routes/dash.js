var express = require("express");
var router = express.Router();

var dashController = require("../controllers/dashController");

router.get("/buscarUltimasMedidas", function (req, res) {
    dashController.buscarUltimasMedidas(req, res);
});

module.exports = router;