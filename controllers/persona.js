const { response } = require("express");
const { obtenerTodasPersonaService, crearPersonaService, obtenerPersonaRutService } = require("../services/persona.service");

const crearPersona = async (req, res = response) => {
  try {
    await crearPersonaService(req.body);

    res.status(201).json({
      ok: true,
      msg: "Datos persona guardados correctamente",
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: error.message || "No se creó la persona",
    });
  }
};


const obtenerPersona = async (req, res = response) => {
  try {
  
    const persona=await obtenerTodasPersonaService();

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

    const persona = await obtenerPersonaRutService(rut);

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
