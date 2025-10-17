const Cotizacion = require("../models/cotizacion");

const crearCotizacionService = async (cotizacionData) => {
  const { rut, cotizaciones } = cotizacionData;

  try {
    const cotizacion = await Cotizacion.findOneAndUpdate(
      { rut },
      {
        _id: rut,
        rut,
        cotizaciones,
      },
      {
        new: true,
        upsert: true,
        setDefaultsOnInsert: true,
      }
    );

    return cotizacion;
  } catch (error) {
    console.error("Error al crear cotización:", error);
    throw new Error("No se pudo guardar cotizaciones");
  }
};

const obtenerCotizacionesService = async () => {
  const cotizaciones = await Cotizacion.find();
  return cotizaciones;
};

const obtenerCotizacionesRutService = async (rut) => {
  const cotizaciones = await Cotizacion.findOne({ rut });
  return cotizaciones;
};

module.exports = {
  crearCotizacionService,
  obtenerCotizacionesService,
  obtenerCotizacionesRutService,
};
