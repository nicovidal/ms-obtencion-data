const { Schema, model } = require('mongoose');


const TablaRangoSchema=Schema({

    maximoDeuda: {
        type: Number,
        required: true,
    },
    politico: {
        type:String,
        require:true,
    },
    delincuente:{
        type:String,
        require:true
    },
    scoreMaximo:{
        type:Number,
        require:true,
    }


})


TablaRangoSchema.method('toJSON',function(){
    const {_v,_id,...object}=this.toObject();

    object.id=_id;
    return object;

})


module.exports = model('TablaRango', TablaRangoSchema);
