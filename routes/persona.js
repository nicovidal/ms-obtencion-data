const {Router}= require('express');
const { crearPersona, obtenerPersona,obtenerPersonaRut} = require('../controllers/persona');
const router=Router();


router.post('/crearPersona',crearPersona)
router.get('/listado',obtenerPersona)
router.get('/personaRut',obtenerPersonaRut)

module.exports=router;