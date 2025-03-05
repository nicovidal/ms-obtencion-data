const {Router}= require('express');
const { crearDeuda, obtenerDeuda} = require('../controllers/deuda');
const router=Router();


router.post('/crearDeuda',crearDeuda)
router.get('/listado',obtenerDeuda)


module.exports=router;