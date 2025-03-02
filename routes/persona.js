const {Router}= require('express');
const { crearPersona, obtenerPersona } = require('../controllers/persona');
const router=Router();


router.post('/crearPersona',crearPersona)
router.get('/listado',obtenerPersona)

module.exports=router;