const TablaRango = require("../models/tabla-rangos");


const crearTablaRangoService = async (tablaRangosData) => {
  const tablaRango = new TablaRango(tablaRangosData);
  await tablaRango.save();
  return tablaRango;
};

const obtenerTablaRangosService = async () => {
  const tablaRangos = await TablaRango.find();
  return tablaRangos;
};
module.exports={
    crearTablaRangoService,
    obtenerTablaRangosService
}