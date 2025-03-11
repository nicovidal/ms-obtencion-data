const { Schema, model } = require("mongoose");

const ScoreSchema = new Schema({
  rut: {
    type: String,
    require: true,
  },
  score: {
    type: Number,
    require: true,
  },
});

ScoreSchema.method("toJSON", function () {
  const { _v, _id, ...object } = this.toObject();

  object.id = _id;
  return object;
});

module.exports = model("Score", ScoreSchema);
