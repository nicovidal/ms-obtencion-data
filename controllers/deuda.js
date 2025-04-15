const { response } = require("express");
const Deuda = require("../models/deuda");
const {
  crearDeudaService,
  obtenerDeudasService,
} = require("../services/deuda.service");
const { obtenerClienteRutService } = require("../services/cliente.service");

const crearDeuda = async (req, res = response) => {
  try {
    await crearDeudaService(req.body);
    res.status(201).json({
      ok: true,
      msg: "Datos deuda guardados correctamente",
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
  const { rut } = req.query.rut;
  try {
    const deuda = await obtenerClienteRutService(rut);

    if (deuda) {
      return res.json(deuda);
    } else {
      return res.status(404).json({ msg: "Deudas no encontradas" });
    }
  } catch (error) {
    res.status(500).json({
      msg: "Error al obtener las deudas del cliente",
    });
  }
};

module.exports = {
  crearDeuda,
  obtenerDeuda,
  obtenerDeudaRut,
};
