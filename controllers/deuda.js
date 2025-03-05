const { response } = require("express");
const {Deuda}=require('../models/deuda')

const crearDeuda=async(req,res=response)=>{

    try {

        let deuda= new Deuda();

        await deuda.save();

        res.status(201).json({
            ok: true,
            msg: "Datos deuda guardados correctamente",
            uid: deuda.id,
          });
        
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: "No se creo deuda",
          });
    }

}

module.exports={
    crearDeuda
}