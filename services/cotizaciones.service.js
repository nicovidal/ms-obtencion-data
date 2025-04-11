const Cotizacion = require("../models/cotizacion");

const crearCotizacionService = async (cotizacionData) => {
  try {
    const cotizacion = new Cotizacion(cotizacionData);
    await cotizacion.save();
    return clientes;
  } catch (error) {
    throw new Error("No se pudo guardar cotizaciones");
  }
};

const obtenerCotizacionesService = async () => {
  const cotizaciones = await Cotizacion.findAll();
  return cotizaciones;
};

const obtenerCotizacionesRutService = async (rut) => {
  const cotizaciones = await Cotizacion.findOne(rut);
  return cotizaciones;
};

module.exports = {
  crearCotizacionService,
  obtenerCotizacionesService,
  obtenerCotizacionesRutService,
};
