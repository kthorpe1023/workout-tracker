const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  date:{
    type: Date,
    default: Date.now()
  },
  duration:{
    type: Number,
    validate: [({number}) => number >= 0, "Duration must be greater than 0"]
  },
  weight:{
    type: Number,
    validate: [({number}) => number >= 0, "Weight must be greater than 0"]
  },
  sets: {
    type: Number,
    validate: [({number}) => number >= 0, "Sets performed must be greater than 0"]
  },
  reps: {
    type: Number,
    validate: [({number}) => number >= 0, "Reps performed must be greater than 0"]
  },
  distance: {
    type: Number,
    validate: [({number}) => number >= 0, "Distance must be greater than 0"]
  }
});

// WorkoutSchema.methods.numExercises = function(){
//     this.numExercises = 
// }

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;