const { response } = require("express");
const { crearOfertaService, obtenerOfertasService } = require("../services/oferta.service");

const crearOferta = async (req, res = response) => {
  try {
    await crearOfertaService(req.body)

    res.status(201).json({
      ok: true,
      msg: "oferta guardado correctamente",
    });
  } catch (error) {
    console.log('error')
  }
};


const obtenerOfertas=async(req,res=response)=>{
  try {
    
   const ofertas= await obtenerOfertasService()

    res.json({ofertas})

  } catch (error) {
    
  }
}

const obtenerOfertaRut=async(req,res=response)=>{
  
  const {rut}=req.query

  try {
    
    const ofertaRut=await obtenerOfertaRutService({rut})

    if (!ofertaRut) {
      return res.status(400).json({
        ok: false,
        msg: "oferta no existe",
      });
    }

  } catch (error) {
    console.log(error);
    
  }
}

module.exports={
    crearOferta,
    obtenerOfertas,
    obtenerOfertaRut
}