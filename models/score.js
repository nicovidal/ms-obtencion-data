const { Schema, model } = require("mongoose");

const ScoreSchema = new Schema({
  _id: {
    type: String,
    required: true,
  },
  rut: {
    type: String,
    required: true,
  },
  score: {
    type: Number,
    required: true,
  },
});

ScoreSchema.method("toJSON", function () {
  const { _v, _id, ...object } = this.toObject();

  object.id = _id;
  return object;
});

module.exports = model("Score", ScoreSchema);
