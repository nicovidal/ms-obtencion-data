const TipoPersona=require('../models/tipoPersona');


const crearTipoPersonaService=async(tipoData)=>{

    const tipoPersona=new TipoPersona(tipoData);
    await tipoPersona.save();
    return tipoPersona;

}


const obtenerTipoPersonaService=async()=>{
    const tipoPersona=await TipoPersona.findAll();
    return tipoPersona;
}


const obtenerTipoPersonaRutService=async(rut)=>{
    const tipoPersona=await TipoPersona.findOne(rut);
    return tipoPersona;
}


module.exports={
    crearTipoPersonaService,
    obtenerTipoPersonaService,
    obtenerTipoPersonaRutService
}