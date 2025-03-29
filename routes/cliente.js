const {Router}=require('express');
const { crearCliente } = require('../controllers/clientes');
const router=Router();



router.post('/clienteNuevo',crearCliente)


module.exports



