const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  date: {
    type: Date,
    default: Date.now()
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
        },
      
    },
  ],
},
//so data is calculate only when requested
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