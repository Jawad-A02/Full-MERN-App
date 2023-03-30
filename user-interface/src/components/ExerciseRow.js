import React from "react";
import {MdEdit, MdDeleteForever} from 'react-icons/md';

function ExerciseRow ({exercise, deleteExercise, EditExercise }) {
    return (
        <tr>
            <th>{exercise.name}</th>
            <th>{exercise.reps}</th>
            <th>{exercise.weight}</th>
            <th>{exercise.unit}</th>
            <th>{exercise.date}</th>
            <th><MdEdit onClick={() => EditExercise(exercise)}/></th>
            <th><MdDeleteForever onClick={() => deleteExercise(exercise._id)}/></th>

        </tr>
    );
}

export default ExerciseRow