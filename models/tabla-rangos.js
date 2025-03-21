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
    },
},

{ versionKey: false } 
)


TablaRangoSchema.method('toJSON',function(){
    const {_id,...object}=this.toObject();

    return object;

})


module.exports = model('TablaRango', TablaRangoSchema);
