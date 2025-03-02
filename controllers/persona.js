const { response } = require("express");
const Persona = require("../models/persona");

const crearPersona = async (req, res = response) => {
  try {
    let persona = new Persona(req.body);

    await persona.save();

    res.status(201).json({
      ok: true,
      msg: "Datos persona guardados correctamente",
      uid: persona.id,
      name: persona.nombre,
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
    const persona = await Persona.find();

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
obtenerPersona
};
