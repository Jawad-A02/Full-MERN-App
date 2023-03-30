import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

function CreateExercisePage() {
    const [name, setName] = useState('')
    const [reps, setReps] = useState('')
    const [weight, setWeight] = useState('')
    const [unit, setUnit] = useState('')
    const [date, setDate] = useState('')

    const navigate = useNavigate();

    const AddExercise = async () => {
        const exercise = {name, reps, weight, unit, date};
        const response = await fetch('/exercises', {
            method: 'POST',
            body: JSON.stringify(exercise),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (response.status === 201) {
            alert("Successfully added the movie!");
        } else {
            alert(`Failed to add movie, status code = ${response.status}`);
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
                    <th>add</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th><input 
                        type = 'text'
                        placeholder="enter Name"
                        value = {name}
                        onChange={e => setName(e.target.value)}/></th>
                    <th><input
                        type = 'number'
                        placeholder="enter reps"
                        value = {reps}
                        min = '1'
                        onChange={e => setReps(e.target.value)}/></th>
                    <th><input
                        type = 'number'
                        placeholder="enter weight"
                        value = {weight}
                        min = '1'
                        onChange={e => setWeight(e.target.value)}/></th>
                    <th><select value={unit} onChange={e => setUnit(e.target.value)}>
                        <option value ='lbs'>lbs</option>
                        <option value ='kgs'>kgs</option>
                        </select></th>
                    <th><input
                        type = 'text'
                        placeholder="enter date"
                        value = {date}
                        onChange={e => setDate(e.target.value)}/></th>
                    <th>
                        <button onClick={AddExercise}>Add</button>
                    </th>
                </tr>
            </tbody>
            </table>
        </div>
    )
};

export default CreateExercisePage;