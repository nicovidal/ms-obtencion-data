const Cotizacion = require("../models/cotizacion");

const crearCotizacionService = async (cotizacionData) => {
  const { rut, cotizaciones } = cotizacionData;

  try {
    const existente = await Cotizacion.findOne({ rut });

    if (existente) {
  
      existente.cotizaciones = cotizaciones;
      await existente.save();
      return existente;
    } else {
    
      const nueva = new Cotizacion({ rut, cotizaciones });
      await nueva.save();
      return nueva;
    }
  } catch (error) {
    throw new Error("No se pudo guardar cotizaciones");
  }
};


const obtenerCotizacionesService = async () => {
  const cotizaciones = await Cotizacion.find();
  return cotizaciones;
};

const obtenerCotizacionesRutService = async (rut) => {
  const cotizaciones = await Cotizacion.findOne({rut});
  return cotizaciones;
};

module.exports = {
  crearCotizacionService,
  obtenerCotizacionesService,
  obtenerCotizacionesRutService,
};
