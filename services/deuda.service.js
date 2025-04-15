const Deuda = require("../models/deuda");

const crearDeudaService = async (deudaData) => {
  try {
    const deuda = new Deuda(deudaData);
    await deuda.save();
  } catch (error) {
    throw new Error("No se pudo crear cliente");
  }
};


const obtenerDeudaRutService=async(rut)=>{
  const deuda=await Deuda.findOne(rut);
  return deuda
}


const obtenerDeudasService=async()=>{
  const deudas=await Deuda.findAll();
  return deudas;
}


module.exports={
    crearDeudaService,
    obtenerDeudaRutService,
    obtenerDeudasService
}