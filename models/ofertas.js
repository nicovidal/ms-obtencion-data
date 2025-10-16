const { Schema, model } = require("mongoose");

const OfertaSchema = Schema(
  {
    _id: {
      type: String,
      required: true,
    },
    rut: {
      type: String,
      required: true,
    },
    montoClp: {
      type: Number,
      required: true,
    },
    montoUsd: {
      type: Number,
      required: true,
    },
  },
  { versionKey: false }
);

OfertaSchema.method("toJSON", function () {
  const { _id, ...object } = this.toObject();

  return object;
});

module.exports = model("Oferta", OfertaSchema);
