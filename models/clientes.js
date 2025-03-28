const { Schema, model } = require("mongoose");

const ClienteSchema = Schema({
  rut: {
    type: String,
    required: true,
  },
  datos: [
    {
      nombreCompleto: {
        type: String,
        required: true,
      },
      Cupo: {
        type: String,
        required: true,
      },
      tipoTarjeta: {
        type: String,
        required: true,
      },
    },
  ],
},
{ versionKey: false } 
);

ClienteSchema.method("toJSON", function () {
  const { _id, ...object } = this.toObject();

  return object;
});

module.exports = model("Cliente", ClienteSchema);
