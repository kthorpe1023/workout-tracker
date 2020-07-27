const db = require("../models");

module.exports = function(app) {
    app.get("/api/workouts", (req, res) =>{
        db.Workout.find({})
        .then((dbWorkout)=> {
            res.json(dbWorkout)
        }).catch((err) => {
            if(err){
                console.log("cannot get workouts")
            }
        })
    });

//post new workout to database
    app.post("/api/workouts", function (req, res){
        //call method to calculate number of exercises
        db.Workout.create(req.body)
        .then((dbWorkout) => {
            res.json(dbWorkout)
        }).catch((err) => {
            if(err){
                console.log("post to workouts err")
            }
        })
    });
    app.put("/api/workouts/:id", function({body, params}, res) {
        db.Workout.updateOne({_id: params.id}, {$push: {exercises: body}})
            .then((dbWorkout) => {
                res.json(dbWorkout);
            })
            .catch((err) => {
                if(err){
                    console.log("error with updateOne")
                }
            });
    })

}