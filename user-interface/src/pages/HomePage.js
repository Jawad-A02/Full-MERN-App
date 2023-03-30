import {useState, useEffect} from "react";
import ExerciseTable from "../components/ExerciseTable";
import { useNavigate } from "react-router-dom";

function HomePage({setEditedExercise}) {
    const [exercises, setExercises] = useState([]);

    const loadExercise = async () => {
        const response = await fetch('/exercises');
        const data = await response.json();
        setExercises(data);
    };

    const deleteExercise = async id => {
        const response = await fetch(`/exercises/${id}`, {method: 'DELETE'});
        if (response.status === 204) {
            setExercises(exercises.filter(e => e._id !== id));
        }else {
            console.error(`Couldn't delete the movie with id: ${id}, sorry uwu`)
        }
    };

    const EditExercise = async exercisetoedit => {
        setEditedExercise(exercisetoedit);
        navigate('/EditExercisePage');
    };

    useEffect( ()=> {
        loadExercise();
    }, [])

    const navigate = useNavigate();

    return (
        <div className="App-home">
            <ExerciseTable exercises={exercises} deleteExercise={deleteExercise} EditExercise={EditExercise}/>
        </div>
    );
}

export default HomePage;