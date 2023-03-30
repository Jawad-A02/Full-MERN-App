import './App.css';
import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage'
import CreateExercisePage from './pages/CreateExercisePage'
import EditExercisePage from './pages/EditExercisePage'

function App() {
  const [editedExercise, setEditedExercise] = useState([])

  return (
    <div className="App">
      <header className="App-header">
        <h1>Exercises</h1>
        <p>
          View, Add, Edit, Delete Exercises;
        </p>
        <p>
          THE OPTIONS ARE LIMITLESS
        </p>
        <Router>
        <Navigation />
        <Routes>
          <Route path='/' element={<HomePage setEditedExercise={setEditedExercise}/>}>HomePage</Route>
          <Route path='/CreateExercisePage' element={<CreateExercisePage />}>AddExercise</Route>
          <Route path='/EditExercisePage' element={<EditExercisePage editedExercise={editedExercise}/>}></Route>
        </Routes>
      </Router>
      </header>
      <footer>
        2023 Jawad Abdullah
      </footer>
    </div>
  );
}

export default App;
