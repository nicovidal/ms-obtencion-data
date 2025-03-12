const { Schema, model } = require('mongoose');


const CotizacionSchema=Schema({

    rut: {
        type: String,
        required: true,
    },
    cotizaciones: {
        mes: {
            type: String,
            required: true,
        },
        remuneracionImponible: {
            type: String,
            required: true,
        },
        afp: {
            type: Date, 
            required: true,
        }
    }


})


CotizacionSchema.method('toJSON',function(){
    const {_v,_id,...object}=this.toObject();

    object.id=_id;
    return object;

})


module.exports = model('Cotizacion', CotizacionSchema);
