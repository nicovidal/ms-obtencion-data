const Cliente = require("../models/clientes");

const crearClienteService = async (clienteData) => {
  const clienteExistente = await Cliente.findOne({ rut: clienteData.rut });
  if (clienteExistente) {
    throw new Error("El cliente ya existe");
  }

  try {
    const cliente = new Cliente(clienteData);
    await cliente.save();
    return cliente;
  } catch (error) {
    throw new Error("No se pudo crear cliente");
  }
};

const obtenerTodosClientesService = async () => {
  const clientes = await Cliente.find();
  return clientes;
};

const obtenerClienteRutService = async (rut) => {
  const cliente = await Cliente.findOne({rut});
  return cliente;
};

module.exports = {
  crearClienteService,
  obtenerTodosClientesService,
  obtenerClienteRutService,
};
