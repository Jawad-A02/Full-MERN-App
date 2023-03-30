import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
    return (
        <nav className="App-nav">
            <Link to="/">Exercises</Link>
            <Link to="/CreateExercisePage">Add Exercise</Link>
        </nav>
    );
}

export default Navigation;