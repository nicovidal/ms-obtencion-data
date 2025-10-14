const Score = require("../models/score");

const crearScoreService = async (scoreData) => {
  scoreData._id = scoreData.rut;

  const score = await Score.findByIdAndUpdate(scoreData._id, scoreData, {
    new: true,
    upsert: true,
  });

  return score;
};

const obtenerTodosScoreClientesService = async () => {
  const score = await Score.find();
  return score;
};

const obtenerScoreRutService = async (rut) => {
  const score = await Score.findOne({ rut });
  return score;
};

module.exports = {
  crearScoreService,
  obtenerTodosScoreClientesService,
  obtenerScoreRutService,
};
