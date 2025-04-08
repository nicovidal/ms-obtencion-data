const Cliente = require("../models/clientes");

const crearClienteService = async (clienteData) => {
  const cliente = new Cliente(clienteData);
  await cliente.save();
  return cliente;
};

const obtenerTodosClientesService = async () => {
  const clientes = await Cliente.findAll();
  return clientes;
};

const obtenerClienteRutService=async(rut)=>{
  const cliente=await Cliente.findOne(rut);
  return cliente;
}

module.exports = {
  crearClienteService,
  obtenerTodosClientesService,
  obtenerClienteRutService
};
