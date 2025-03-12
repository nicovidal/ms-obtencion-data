const { response } = require("express");
const  Cotizacion  = require("../models/cotizacion");


const crearCotizacion = async (req, res = response) => {
  try {
    let cotizacion = new Cotizacion(req.body);

    await cotizacion.save();

    res.status(201).json({
      ok: true,
      msg: "Datos cotizacion guardados correctamente",
      uid: cotizacion.id,
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: "No se creo cotizacion",
    });
  }
};

const obtenerCotizaciones = async (req, res = response) => {
  try {
    const cotizaciones = await Cotizacion.find();

    res.json({
      ok: true,
      cotizaciones,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "No se obtuvo cotizaciones",
    });
  }
};


const obtenerCotizacionRut = async (req, res = response) => {
  try {
    const { rut } = req.query;

    const cotizacion = await Cotizacion.findOne({rut});

    if (!cotizacion) {
      return res.status(400).json({
        ok: false,
        msg: "cotizacion no existe",
      });
    }

    res.json({
      ok: true,
      cotizacion,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "error obtener cotizacion al rut"+rut,
    });
  }
};


module.exports={
    crearCotizacion,
    obtenerCotizaciones,
    obtenerCotizacionRut
}