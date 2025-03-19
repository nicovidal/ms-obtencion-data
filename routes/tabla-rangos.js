const {Router}= require('express');
const { obtenerTablaRangos, crearTablaRangos } = require('../controllers/tabla-rangos');

const router=Router();



router.get('/tablaRangos',obtenerTablaRangos)
router.post('/crearTablaRangos',crearTablaRangos)


module.exports=router;