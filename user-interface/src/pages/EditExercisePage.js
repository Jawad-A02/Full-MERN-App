import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

function EditExercisePage({editedExercise}) {
    const [name, setName] = useState(editedExercise.name)
    const [reps, setReps] = useState(editedExercise.reps)
    const [weight, setWeight] = useState(editedExercise.weight)
    const [unit, setUnit] = useState(editedExercise.unit)
    const [date, setDate] = useState(editedExercise.date)

    const navigate = useNavigate();

    const EditExercise = async () => {
        const editedexercise = {name, reps, weight, unit, date};
        const response = await fetch(`/exercises/${editedExercise._id}`, {
            method: 'PUT',
            body: JSON.stringify(editedexercise),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (response.status === 200) {
            alert("Successfully edited the movie!");
        } else {
            alert(`Failed to edit movie, status code = ${response.status}`);
        }
        navigate('/');
    }


    return (
        <div>
            <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>reps</th>
                    <th>weight</th>
                    <th>unit</th>
                    <th>date</th>
                    <th>edit</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th><input 
                        type = 'text'
                        value = {name}
                        onChange={e => setName(e.target.value)}/></th>
                    <th><input
                        type = 'number'
                        value = {reps}
                        min = '1'
                        onChange={e => setReps(e.target.value)}/></th>
                    <th><input
                        type = 'number'
                        value = {weight}
                        min = '1'
                        onChange={e => setWeight(e.target.value)}/></th>
                    <th><select value={unit} onChange={e => setUnit(e.target.value)}>
                        <option value ='lbs'>lbs</option>
                        <option value ='kgs'>kgs</option>
                        </select></th>
                    <th><input
                        type = 'text'
                        value = {date}
                        onChange={e => setDate(e.target.value)}/></th>
                    <th>
                        <button onClick={EditExercise}>Edit</button>
                    </th>
                </tr>
            </tbody>
            </table>
        </div>
    )
};

export default EditExercisePage;