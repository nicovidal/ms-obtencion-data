const { Router } = require("express");
const { crearOferta } = require("../controllers/ofertas");
const router = Router();

router.post("/crearOferta", crearOferta);

module.exports = router;
