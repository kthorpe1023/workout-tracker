const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const HistorySchema = new Schema({
  name: {
    type: String,
    unique: true
  },
  books: [
    {
      type: Schema.Types.ObjectId,
      ref: "newWorkout"
    }
  ]
});

const History = mongoose.model("History", HistorySchema);

module.exports = History;