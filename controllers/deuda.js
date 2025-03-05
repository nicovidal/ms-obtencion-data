const { response } = require("express");
const { Deuda } = require("../models/deuda");

const crearDeuda = async (req, res = response) => {
  try {
    let deuda = new Deuda(req.body);

    await deuda.save();

    res.status(201).json({
      ok: true,
      msg: "Datos deuda guardados correctamente",
      uid: deuda.id,
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: "No se creo deuda",
    });
  }
};

const obtenerDeuda = async (req, res = response) => {
  try {
    const deuda = await Deuda.find();

    res.json({
      ok: true,
      deuda,
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
  crearDeuda,
  obtenerDeuda
};
