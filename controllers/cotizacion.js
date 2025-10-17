const { response } = require("express");
const {
  crearCotizacionService,
  obtenerCotizacionesService,
  obtenerCotizacionesRutService,
} = require("../services/cotizaciones.service");

const logger = require("../utils/logger");

const crearCotizacion = async (req, res = response) => {
  try {
    await crearCotizacionService(req.body);

    logger.info(`Cotizacion creada para rut ${req.body.rut}`);
    res.status(201).json({
      ok: true,
      msg: "Datos cotizacion guardados correctamente",
    });
  } catch (error) {
    logger.error(`Error en guardar cotizaciones para rut ${req.body.rut}`);
    res.status(500).json({
      ok: false,
      msg: "No se creo cotizacion",
    });
  }
};

const obtenerCotizaciones = async (req, res = response) => {
  try {
    const cotizaciones = await obtenerCotizacionesService();

    logger.info(`Cotizaciones obtenidas con exito`);
    res.json({
      ok: true,
      cotizaciones,
    });
  } catch (error) {
    logger.error(`Error al obtener listado de cotizaciones`);
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
      logger.error(`Cotización no encontrada para el rut ${rut} `);
      return res.status(404).json({
        msg: `Cotización no encontrada para el rut ${rut}`,
      });
    }
    logger.info(`Cotizaciones del rut ${rut} obtenidas`);
    res.status(200).json(cotizacion);
  } catch (error) {
    logger.error(`Error al obtener la cotizacion de ${rut}`);
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
