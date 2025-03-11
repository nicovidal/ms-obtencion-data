const {Router}= require('express');
const {crearScore,obtenerScore, obtenerScoreRut} = require('../controllers/score');
const router=Router();



router.get('/score',obtenerScore)
router.post('/guardarScore',crearScore)
router.get('/scoreRut',obtenerScoreRut)


module.exports=router;