const Deuda = require("../models/deuda");

const crearDeudaService = async (deudaData) => {
  const { rut, deuda } = deudaData;

  try {

    const deudaExistente = await Deuda.findOne({ rut });

    if (deudaExistente) {

      deudaExistente.deuda = deuda;
      await deudaExistente.save();
      return deudaExistente;
    } else {
    
      const nuevaDeuda = new Deuda(deudaData);
      await nuevaDeuda.save();
      return nuevaDeuda;
    }
  } catch (error) {
    throw new Error("No se pudo crear o actualizar la deuda");
  }
};


const obtenerDeudaRutService = async (rut) => {
  const deuda = await Deuda.findOne({ rut });
  return deuda;
};


const obtenerDeudasService=async()=>{
  const deudas=await Deuda.find();
  return deudas;
}


module.exports={
    crearDeudaService,
    obtenerDeudaRutService,
    obtenerDeudasService
}