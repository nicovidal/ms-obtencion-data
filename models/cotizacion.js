const { Schema, model } = require("mongoose");

const CotizacionSchema = Schema({
  rut: {
    type: String,
    required: true,
  },
  cotizaciones: [
    {
      mes: {
        type: String,
        required: true,
      },
      remuneracionImponible: {
        type: String,
        required: true,
      },
      afp: {
        type: String,
        required: true,
      },
    },
  ],
},
{ versionKey: false } 
);

CotizacionSchema.method("toJSON", function () {
  const { _id, ...object } = this.toObject();

  return object;
});

module.exports = model("Cotizacion", CotizacionSchema);
