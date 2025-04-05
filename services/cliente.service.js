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

module.exports = {
  crearClienteService,
  obtenerTodosClientesService
};
