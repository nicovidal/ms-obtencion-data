const { response } = require("express");
const TablaRangos = require("../models/tabla-rangos");

const crearTablaRangos = async (req, res = response) => {
  try {
    let tablaRangos = new TablaRangos(req.body);

    await tablaRangos.save();

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

const obtenerTablaRangos = async (req,res = response) => {
  try {
    const tablaRangos = await TablaRangos.findOne();
    res.json(

      tablaRangos,
    );
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
