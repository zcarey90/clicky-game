import React, { Component } from "react";
import logo from "./batsignal.jpg";
import wrapper from "./src/wrapper";
import cards from "./src/cards";
import header from "./src/header";
import "./App.css";

class App extends Component {
  state = {
    cards,
    PointsScored: 0,
    highscore: 0
  };
}


gameOver = () => {
  if(this.state.PointsScored > this.state.highscore) {
    this.setState({highscore: this.state.score}, function() {
      console.log("highscore");
    });
  }

}

onclickCount = id => {
  this.state.cards.find((o,i)) => {
    if
  }
}

var resetAndStart = function() {
  $(".images").empty();

  function App() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={batsignal.jpg} className="App-logo" alt="logo" />
          <p></p>
          <a
            className="App-link"
            href="https://https://www.dccomics.com/characters/batman"
            target="_blank"
            rel="noopener noreferrer"
          >
            Batman Clicky Game
          </a>
        </header>
      </div>
    );
  }

$(".images").on("click", ".image", function() {
  var num = parseInt($(this).attr("data-random"));

  past += num;

  $("#past").text(past);

  console.log(past);

  if (past > random_result) {
    lost++;

    $("#lost").html("Game Over:", lost);

    past = 0;

    resetAndStart();
  } else if (past === random_result) {
    win++;

    $("#win").html("You won:", win);

    past = 0;

    resetAndStart();
  }
});
