const TablaRangos = require("../models/tabla-rangos");


const crearTablaRangoService=async(tablaRangosData)=>{

    const tablaRangos=new TablaRangos(req.body)

    return tablaRangos;
}

const obtenerTablaRangosService=async()=>{
    const tablaRangos=new TablaRangos.find();
    return tablaRangos
}


module.exports={
    crearTablaRangoService,
    obtenerTablaRangosService
}