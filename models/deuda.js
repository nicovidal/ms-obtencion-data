const { Schema, model } = require("mongoose");

const DeudaSchema = new Schema({
  _id: {
    type: String,
    required: true,
  },
  rut: { type: String, required: true },
  deuda: [
    {
      nombreInstitucion: { type: String, required: true },
      monto: { type: String, required: true },
      fecha: { type: Date, required: true },
    },
  ],
});

DeudaSchema.method("toJSON", function () {
  const { _v, _id, ...object } = this.toObject();

  object.id = _id;
  return object;
});

module.exports = model("Deuda", DeudaSchema);
