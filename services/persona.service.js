const Persona = require("../models/persona");

const crearPersonaService = async (personaData) => {
  const personaExiste = await Persona.findOne({ rut: personaData.rut });

  if (personaExiste) {
    throw new Error("La persona ya existe");
  }

  try {
    const persona = new Persona(personaData);
    await persona.save();
    return persona;
  } catch (error) {
    throw new Error("No se pudo crear persona");
  }
};

const obtenerPersonaRutService = async (rut) => {
  const persona = await Persona.findOne(rut);
  return persona;
};

const obtenerTodasPersonaService = async () => {
  const persona = await Persona.findAll();
  return persona;
};

module.exports = {
  crearPersonaService,
  obtenerPersonaRutService,
  obtenerTodasPersonaService,
};
