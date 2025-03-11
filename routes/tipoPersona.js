const {Router}= require('express');
const { crearTipo,obtenerTipo, obtenerTipoRut } = require('../controllers/tipo');
const router=Router();



router.get('/tipo',obtenerTipo)
router.post('/guardarTipo',crearTipo)
router.get('/tipoRut',obtenerTipoRut)


module.exports=router;