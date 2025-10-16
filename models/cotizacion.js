const { Schema, model } = require("mongoose");

const CotizacionSchema = Schema(
  {
    _id: {
      type: String,
      required: true,
    },
    rut: {
      type: String,
      required: true,
      unique: true,
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
