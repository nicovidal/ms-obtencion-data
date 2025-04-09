const { response } = require("express");
const {
  crearClienteService,
  obtenerTodosClientesService,
  obtenerClienteRutService
} = require("../services/cliente.service");

const crearCliente = async (req, res = response) => {
  try {
    await crearClienteService(req.body); 
    res.status(201).json({
      ok: true,
      msg: 'Cliente guardado correctamente'
    });
  } catch (error) {
    console.error(error);

    if (error.message === 'El cliente ya existe') {
      return res.status(400).json({
        ok: false,
        msg: error.message
      });
    }

    res.status(500).json({
      ok: false,
      msg: 'Error al crear cliente'
    });
  }
};

const todoClientes = async (req, res = response) => {
  try {
    const clientes = await obtenerTodosClientesService();
    res.status(200).json({ clientes });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      ok: false,
      msg: 'Error al obtener clientes'
    });
  }
};

const clienteRut=async(req,res=response)=>{

  const {rut}=req.body

  try {
    const cliente=await obtenerClienteRutService(rut)
    res.status(200).json({cliente})
  } catch (error) {
    console.error(error)
    res.status(500).json({
      ok: false,
      msg: 'Error al obtener clientes'
    });
    
  }
}

module.exports = {
  crearCliente,
  todoClientes,
  clienteRut
};
