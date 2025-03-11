const {Schema,model} = require('mongoose')



const TipoPersona=new Schema({


    rut:{
        type:String,
        require:true,
    },
    politico:{
        type:String,
        require:true,
    },
    delincuente:{
        type:String,
        require:true,
    },



})




TipoPersona.method('toJSON',function(){
    const {_v,_id,...object}=this.toObject();

    object.id=_id;
    return object;

})


module.exports=model('TipoPersona',TipoPersona)
