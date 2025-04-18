const Score = require("../models/score");

const crearScoreService = async (scoreData) => {
  const score = new Score(scoreData);
  await score.save();
  return score;
};


const obtenerTodosScoreClientesService=async()=>{
    const score= await Score.findAll();
    return score;
}

const obtenerScoreRutService=async(rut)=>{
    const score= await Score.findOne(rut);
    return score;
}


module.exports={
    crearScoreService,
    obtenerTodosScoreClientesService,
    obtenerScoreRutService
}