const { response } = require("express");
const {
  crearDeudaService,
  obtenerDeudasService,
  obtenerDeudaRutService
} = require("../services/deuda.service");


const crearDeuda = async (req, res = response) => {
  try {
    await crearDeudaService(req.body);

    res.status(201).json({
      ok: true,
      msg: "Datos deuda guardados correctamente",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      ok: false,
      msg: "No se creó deuda",
    });
  }
};


const obtenerDeuda = async (req, res = response) => {
  try {
    const deuda = await obtenerDeudasService();
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


const obtenerDeudaRut = async (req, res = response) => {
  const { rut } = req.query;

  try {
    const deuda = await obtenerDeudaRutService(rut);

    if (deuda) {
      return res.json({
        ok: true,
        deuda,
      });
    } else {
      return res.status(404).json({
        ok: false,
        msg: "Deudas no encontradas",
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({
      ok: false,
      msg: "Error al obtener las deudas del cliente",
    });
  }
};


module.exports = {
  crearDeuda,
  obtenerDeuda,
  obtenerDeudaRut,
};
