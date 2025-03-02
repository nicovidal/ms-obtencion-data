const {Schema,model}=require('mongoose');

const PersonaSchema=Schema({


    rut:{
        type:String,
        require:true,
    },
    nombreCompleto:{
        type:String,
        require:true,
    },
    apellidoPaterno:{
        type:String,
        require:true,
    },
    apellidoMaterno:{
        type:String,
        require:true
    },
    nombres:{
        type:String,
        require:true
    }
    


})



PersonaSchema.method('toJSON',function(){
    const {_v,_id,...object}=this.toObject();

    object.id=_id;
    return object;

})

module.exports=model('Persona',PersonaSchema)