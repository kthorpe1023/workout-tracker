const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
  },
  exercises:[
    {
    type: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    duration:{
      type: Number,
      required: true,
    },
        weight:Number,
        sets: Number,
        reps: Number,
        distance: Number,
      
    },
  ],
},
//so data is calculated only when requested
    {
      toJSON: {
        viruals: true
      }
    });

    //calculate total duration of workout
    WorkoutSchema.virtual("totalDuration").get(function () {
      return this.exercises.reduce((total, exercise) => {
        return total + exercise.duration;
      }, 0);
    });


const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;