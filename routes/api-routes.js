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
            console.log("api-routes req.body ", req.body)
        }).catch((err) => {
            if(err){
                console.log("post to workouts err");
                console.log(req.body)
            }
        })
    });

    app.put("/api/workouts/:id", function({body, params}, res) {
        db.Workout.updateOne({_id: params.id}, {$push: {exercises: body}})
            .then((dbWorkout) => {
                console.log("put api-routes ", {body})
                res.json(dbWorkout);
            })
            .catch((err) => {
                if(err){
                    console.log("error with updateOne")
                }
            });
    });

    app.get("/api/workouts/range", (req,res) => {
        db.Workout.find({})
            .then((range) => {
                res.json(range)
            })
            .catch((err) => {
                if(err){
                    console.log("get range not working\n", err)
                }
            })
    })

}