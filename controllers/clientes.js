const { response } = require("express");
const Cliente = require("../models/clientes");

const crearCliente = async (req, res = response) => {


  try {
    let cliente = new Cliente(req.body);

    await cliente.save();
  } catch (error) {

    
  }
};
