import 'dotenv/config';
import * as exercises from './exercises_model.mjs';
import express from 'express';
import {body, validationResult } from 'express-validator';

const PORT = process.env.PORT;

const app = express();

app.use(express.json());

/**
 * Create a new movie with the title, year and language provided in the body
 */

app.post(
    "/exercises",
    body('name').exists({checkFalsy: true}),
    body('reps').isInt({gt:0}),
    body('weight').isInt({gt:0}),
    body('unit').exists(),
    body('date').custom(date => {
        if (exercises.isDateValid(date) === false) {
            throw new Error('Not a correct date')
        }
        return true;
    }),
     (req, res) =>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ Error: "Invalid request" });
    }
    const name = req.body.name;
    const reps = req.body.reps;
    const weight = req.body.weight;
    const unit = req.body.unit;
    const date = req.body.date;
    exercises.createExercise(name, reps, weight, unit, date)
        .then(exercise => {
            res.status(201).json(exercise)
        })
        .catch(error => {
            res.status(404).send(error)
        });
});

app.get("/exercises/:_id", (req, res) => {
    const filter = {_id: req.params._id};
    exercises.findExercise(filter)
        .then(exercise => {
            if(exercise !== null){
                res.status(200).json(exercise);
            }
        })
        .catch(error => {
            res.status(404).json({Error: "Not found"});
        })
});

app.get("/exercises", (req, res) => {
    const filter = {};
    exercises.findExercise(filter)
        .then(exercise => {
            res.status(200).json(exercise);
        })
        .catch(error => {
            res.send({Error: "request failed"});
        });
});

app.put(
    "/exercises/:_id",
    body('name').exists({checkFalsy: true}),
    body('reps').isInt({gt:0}),
    body('weight').isInt({gt:0}),
    body('unit').exists(),
    body('date').custom(date => {
        if (exercises.isDateValid(date) === false) {
            throw new Error('Not a correct date format')
        }
        return true;
    }),
     (req, res) =>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ Error: "Invalid request" });
    } 
    const name = req.body.name;
    const reps = req.body.reps;
    const weight = req.body.weight;
    const unit = req.body.unit;
    const date = req.body.date;
    exercises.replaceExercise(req.params._id, name, reps, weight, unit, date)
        .then(result => {
            if (result.matchedCount === 1){
                res.status(200).json({_id: req.params._id, name: name, reps: reps, weight:weight, unit: unit, date: date})
            };
        }) 
        .catch(error => {
            res.status(404).json({Error: "Not Found"});
        })
});

app.delete("/exercises/:_id", (req, res) => {
    exercises.deleteExercise(req.params._id)
        .then(deletedCount => {
            if(deletedCount === 1){
                res.status(204).send()
            }
        })
        .catch(error => {
            res.status(404).send({Error: "Not found"})
        })
});



app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});