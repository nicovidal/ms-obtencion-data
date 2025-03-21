const { Schema, model } = require("mongoose");

const TipoPersona = new Schema(
  {
    rut: {
      type: String,
      require: true,
    },
    politico: {
      type: String,
      require: true,
    },
    delincuente: {
      type: String,
      require: true,
    },
  },

  { versionKey: false }
);

TipoPersona.method("toJSON", function () {
  const { _id, ...object } = this.toObject();

  return object;
});

module.exports = model("TipoPersona", TipoPersona);
