import React from 'react';
import { Route } from 'react-router-dom';
import Home from "./Home";
import Projects from "./Projects";
import About from "./About";

function Main(props) {
    return (
        <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/about" component={About} />
        </div>
    );
}

export default Main;