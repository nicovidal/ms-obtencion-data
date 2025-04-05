const { response } = require("express");
const Oferta = require("../models/ofertas");

const crearOferta = async (req, res = response) => {
  try {
    const oferta = new Oferta(req.body);

    await oferta.save();

    res.status(201).json({
      ok: true,
      msg: "oferta guardado correctamente",
    });
  } catch (error) {}
};


module.exports={
    crearOferta
}