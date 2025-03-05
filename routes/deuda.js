const {Router}= require('express');
const { crearDeuda} = require('../controllers/deuda');
const router=Router();


router.post('/crearDeuda',crearDeuda)


module.exports=router;