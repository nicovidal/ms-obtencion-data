const {Router}= require('express');
const { crearDeuda, obtenerDeuda, obtenerDeudaRut} = require('../controllers/deuda');
const router=Router();


router.post('/crearDeuda',crearDeuda)
router.get('/listado',obtenerDeuda)
router.get('/deudaRut',obtenerDeudaRut)



module.exports=router;