const { response } = require("express");
const {
  crearCotizacionService,
  obtenerCotizacionesService,
} = require("../services/cotizaciones.service");
const { obtenerClienteRutService } = require("../services/cliente.service");

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

  try {
  
    const cotizacion = await obtenerClienteRutService({ rut });

    if (!cotizacion) {
      return res.status(400).json({
        ok: false,
        msg: "cotizacion no existe",
      });
    }

    res.json({
      ok: true,
      cotizacion,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "error obtener cotizacion al rut" + rut,
    });
  }
};

module.exports = {
  crearCotizacion,
  obtenerCotizaciones,
  obtenerCotizacionRut,
};
