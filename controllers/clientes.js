const { response } = require("express");
const Cliente = require("../models/clientes");

const crearCliente = async (req, res = response) => {


  try {
    let cliente = new Cliente(req.body);

    await cliente.save();
    
    res.status(201).json({
      ok:true,
      msg:'cliente guardado correctamente'
    });
  } catch (error) {

      throw new Error('Error al crear cliente')
  }
};



module.exports={
  crearCliente
}