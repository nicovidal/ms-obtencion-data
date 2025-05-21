const { response } = require("express");
const {
  crearOfertaService,
  obtenerOfertasService,
  obtenerOfertaRutService
} = require("../services/oferta.service");

const crearOferta = async (req, res = response) => {
  try {
    await crearOfertaService(req.body);

    res.status(201).json({
      ok: true,
      msg: "Oferta guardada correctamente",
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      ok: false,
      msg: "No se pudo guardar la oferta",
    });
  }
};

const obtenerOfertas = async (req, res = response) => {
  try {
    const ofertas = await obtenerOfertasService();

    res.json({ 
      ok:true,
      ofertas 
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Hable con el administrador",
    });

  }
};

const obtenerOfertaRut = async (req, res = response) => {
  const { rut } = req.query;

  try {
    const ofertaRut = await obtenerOfertaRutService(rut);

    if (ofertaRut) {
      return res.status(400).json({
        ok: true,
        ofertaRut,
      });
    } else {
      return res.status(404).json({
        ok: false,
        msg: "Oferta no encontrada",
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({
      ok: false,
      msg: "Error al obtener las oferta del cliente",
    });
  }
};

module.exports = {
  crearOferta,
  obtenerOfertas,
  obtenerOfertaRut,
};
