const Oferta = require("../models/ofertas");

const crearOfertaService = async (ofertaData) => {
  try {
    const oferta = new Oferta(ofertaData);
    await oferta.save();
  } catch (error) {
    throw new Error("No se pudo crear deuda");
  }
};

const obtenerOfertaRutService = async (rut) => {
  const oferta = await Oferta.findOne(rut);
  return oferta;
};


const obtenerOfertasService=async()=>{
    const oferta= await Oferta.findAll();
    return oferta;
}


module.exports={
    crearOfertaService,
    obtenerOfertaRutService,
    obtenerOfertasService
}
