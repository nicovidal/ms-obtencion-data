const Deuda = require("../models/deuda");

const crearDeudaService = async (deudaData) => {
  try {
    const deuda = new Deuda(deudaData);
    await deuda.save();
  } catch (error) {
    throw new Error("No se pudo crear cliente");
  }
};




module.exports={
    crearDeudaService
}