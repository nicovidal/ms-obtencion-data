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




module.exports={
    crearPersonaService
}