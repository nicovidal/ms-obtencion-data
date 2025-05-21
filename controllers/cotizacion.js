const { response } = require("express");
const {
  crearCotizacionService,
  obtenerCotizacionesService,
  obtenerCotizacionesRutService
} = require("../services/cotizaciones.service");

const crearCotizacion = async (req, res = response) => {
  try {
    await crearCotizacionService(req.body);

    res.status(201).json({
      ok: true,
      msg: "Datos cotizacion guardados correctamente",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "No se creo cotizacion",
    });
  }
};

const obtenerCotizaciones = async (req, res = response) => {
  try {
    const cotizaciones = await obtenerCotizacionesService();

    res.json({
      ok: true,
      cotizaciones,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "No se obtuvo cotizaciones",
    });
  }
};

const obtenerCotizacionRut = async (req, res = response) => {
  const { rut } = req.query;

  if (!rut) {
    return res.status(400).json({
      ok: false,
      msg: "El rut es requerido",
    });
  }

  try {
    const cotizacion = await obtenerCotizacionesRutService(rut);

    if (!cotizacion) {
      return res.status(404).json({
        ok: false,
        msg: "Cotización no encontrada para el rut",
      });
    }

    res.status(200).json({
      ok: true,
      cotizacion,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Error al obtener cotización del rut " + rut,
    });
  }
};


module.exports = {
  crearCotizacion,
  obtenerCotizaciones,
  obtenerCotizacionRut,
};
