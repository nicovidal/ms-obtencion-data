const Oferta = require("../models/ofertas");

const crearOfertaService = async (ofertaData) => {
  try {
    await Oferta.findOneAndUpdate(
      { rut: ofertaData.rut },
      ofertaData,
      { upsert: true, new: true }
    );
  } catch (error) {
    throw new Error("No se pudo guardar la oferta");
  }
};

const obtenerOfertaRutService = async (rut) => {
  const oferta = await Oferta.findOne({rut});
  return oferta;
};


const obtenerOfertasService=async()=>{
    const oferta= await Oferta.find();
    return oferta;
}


module.exports={
    crearOfertaService,
    obtenerOfertaRutService,
    obtenerOfertasService
}
