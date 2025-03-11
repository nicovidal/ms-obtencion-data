const { response } = require("express");
const  TipoPersona  = require("../models/tipoPersona");

const crearTipo = async (req, res = response) => {
  try {
    let tipoPersona = new TipoPersona(req.body);

    await tipoPersona.save();

    res.status(201).json({
      ok: true,
      msg: "Datos de tipo persona guardados correctamente",
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: "No se creo",
    });
  }
};

const obtenerTipo = async (req, res = response) => {
  try {
    const tipoPersona = await TipoPersona.find();

    res.json({
      ok: true,
      tipoPersona,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Hable con el administrador",
    });
  }
};


const obtenerTipoRut = async (req, res = response) => {
  try {
    const { rut } = req.query;

    const tipoPersona = await TipoPersona.findOne({rut});

    if (!tipoPersona) {
      return res.status(400).json({
        ok: false,
        msg: "tipoPersona no existe",
      });
    }

    res.json({
      ok: true,
      tipoPersona,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Hable con el administrador",
    });
  }
};


module.exports = {
  crearTipo,
  obtenerTipo,
  obtenerTipoRut
};
