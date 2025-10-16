const { Schema, model } = require("mongoose");

const PersonaSchema = new Schema(
  {
    _id: {
      type: String,
      required: true,
    },
    rut: {
      type: String,
      required: true,
    },
    nombreCompleto: {
      type: String,
      required: true,
    },
    apellidoPaterno: {
      type: String,
      required: true,
    },
    apellidoMaterno: {
      type: String,
      required: true,
    },
    nombres: {
      type: String,
      required: true,
    },
  },
  { versionKey: false }
);

PersonaSchema.method("toJSON", function () {
  const { _id, ...object } = this.toObject();

  return object;
});

module.exports = model("Persona", PersonaSchema);
