import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Projects.css";

function Projects(props) {
  return (
    <div className="container">
      <p className="title">Here are some Projects I have made using html, javaScript, and css.</p>
      <button className="catButton">
        <Link className="cat-button"
          to={{
            pathname: "https://ronnieross711.github.io/Cat-Generator/",
          }}
          target="_blank"
        >
          Random Cat Api
        </Link>
      </button>

      <br />

      <button className="pokemonButton">
        <Link className="pokemon-button"
          to={{
            pathname: " https://ronnieross711.github.io/Pokemon-API/",
          }}
          target="_blank"
        >
          Pokémon API
        </Link>
      </button>

      <br />

      <button className="ageButton">
        <Link className="age-button"
          to={{
            pathname: "https://ronnieross711.github.io/AgeinDaysCalculator/",
          }}
          target="_blank"
        >
          Age In Days
        </Link>
      </button>

      <br />

      <button className="rps-button">
        <Link className="rpsButton"
          to={{
            pathname: "https://ronnieross711.github.io/RockPaperScissors/",
          }}
          target="_blank"
        >
          Rock Paper Scissors
        </Link>
      </button>

      <br />

      <button className="phish-button">
        <Link className="phishButton"
          to={{ pathname: "https://ronnieross711.github.io/GA_Project_1/" }}
          target="_blank"
        >
          Phish Trivia
        </Link>
      </button>

      <br />

      <button className="blackJackGame">
        <Link className="blackjack-game"
          to={{ pathname: " https://ronnieross711.github.io/BlackJack/" }}
          target="_blank"
        >
          Black Jack
        </Link>
      </button>
    </div>
  );
}

export default Projects;
