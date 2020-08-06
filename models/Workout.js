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
      required: "Must be a number",
    },
    weight: {
      type: Number,
      required: "Must be a number",
    },
    sets: {
      type: Number,
      required: "Must be a number",
    },
    reps: {
      type: Number,
      required: "Must be a number",
    },
    distance: {
      type: Number,
      required: "Must be a number",
    },
      
    },
  ],
});
//so data is calculated only when requested
    // {
    //   toJSON: {
    //     viruals: true
    //   }
    // });

    //calculate total duration of workout
    // WorkoutSchema.virtual("totalDuration").get( () => {
    //   return this.exercises.reduce((total, exercise) => {
    //     console.log("total ", total)
    //     return total += exercise.duration;
    //   }, 0);
    // });


const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;