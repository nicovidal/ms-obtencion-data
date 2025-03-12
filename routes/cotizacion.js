const {Router}= require('express');
const { crearCotizacion, obtenerCotizaciones, obtenerCotizacionRut } = require('../controllers/cotizacion');

const router=Router();


router.post('/crearCotizacion',crearCotizacion)
router.get('/listadoCotizaciones',obtenerCotizaciones)
router.get('/cotizacionesRut',obtenerCotizacionRut)



module.exports=router;