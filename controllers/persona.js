const { response } = require("express");
const Persona = require("../models/persona");
const { crearTipoPersonaService, obtenerTipoPersonaService, obtenerTipoPersonaRutService } = require("../services/tipo.service");

const crearPersona = async (req, res = response) => {
  try {

    await crearTipoPersonaService(req.body)

    res.status(201).json({
      ok: true,
      msg: "Datos persona guardados correctamente",

    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: "No se creo",
    });
  }
};

const obtenerPersona = async (req, res = response) => {
  try {
  
    const persona=await obtenerTipoPersonaService();

    res.json({
      ok: true,
      persona,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Hable con el administrador",
    });
  }
};

const obtenerPersonaRut = async (req, res = response) => {
  try {
    const { rut } = req.query;

    const persona = await obtenerTipoPersonaRutService(rut);

    if (!persona) {
      return res.status(400).json({
        ok: false,
        msg: "Persona no existe",
      });
    }

    res.json({
      ok: true,
      persona,
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
  crearPersona,
  obtenerPersona,
  obtenerPersonaRut
};
