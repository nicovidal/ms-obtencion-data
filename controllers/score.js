const { response } = require("express");
const Score = require("../models/score");

const crearScore = async (req, res = response) => {
  try {
    let score = new Score(req.body);

    await score.save();

    res.status(201).json({
      ok: true,
      msg: "Datos de score guardados correctamente",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "No se creo",
    });
  }
};

const obtenerScore = async (req, res = response) => {
  try {
    const score = await Score.find();

    res.json({
      ok: true,
      score,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Hable con el administrador",
    });
  }
};


const obtenerScoreRut = async (req, res = response) => {
  try {
    const { rut } = req.query;

    const score = await Score.findOne({rut});

    if (!score) {
      return res.status(400).json({
        ok: false,
        msg: "score no existe",
      });
    }

    res.json({
      ok: true,
      score,
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
  crearScore,
  obtenerScore,
  obtenerScoreRut
};
