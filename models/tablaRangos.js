const { Schema, model } = require('mongoose');


const TablaRangoSchema=Schema({

    maximoDeuda: {
        type: int,
        required: true,
    },
    politico: {
        type:string,
        require:true,
    },
    delincuente:{
        type:string,
        require:true
    }


})


CotizacionSchema.method('toJSON',function(){
    const {_v,_id,...object}=this.toObject();

    object.id=_id;
    return object;

})


module.exports = model('Cotizacion', CotizacionSchema);
