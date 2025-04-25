const { response } = require("express");
const TablaRangos = require("../models/tabla-rangos");
const {
  obtenerTablaRangosService,
  crearTablaRangoService,
} = require("../services/tabla-rangos.service");

const crearTablaRangos = async (req, res = response) => {
  try {
    await crearTablaRangoService(req.body);

    res.status(201).json({
      ok: true,
      msg: "Tabla rangos guardados correctamente",
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: "No se creo",
    });
  }
};

const obtenerTablaRangos = async (req, res = response) => {
  try {
    const tablaRangos = await obtenerTablaRangosService();

    res.json(tablaRangos);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Hable con el administrador",
    });
  }
};

module.exports = {
  crearTablaRangos,
  obtenerTablaRangos,
};
