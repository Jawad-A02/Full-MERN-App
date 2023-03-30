import React from "react";
import ExerciseRow from "./ExerciseRow"

function ExerciseTable ({exercises, deleteExercise, EditExercise}) {
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>reps</th>
                    <th>weight</th>
                    <th>unit</th>
                    <th>date</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {exercises.map ((exercise, key) => <ExerciseRow exercise={exercise} 
                deleteExercise={deleteExercise}
                EditExercise={EditExercise}
                key={key}/>)}
            </tbody>
        </table>
    );
}

export default ExerciseTable;