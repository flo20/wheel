import React from "react";
import ReactDOM from "react-dom";

import Wheel from "./components/wheel/App";
import "./index.css";

export class App extends React.Component {
  constructor() {
    super();
    this.places = [
      "General Knowldge",
      "Science",
      "Maths",
      "Video Games",
      "Geography",
      "Music",
      "Computer",
      "Entertainment",
      "Sports",
      "Movies",
    ];
  }

  render() {
    return (
      <div className="App">
        <p>Logged in as Kata</p>
        <Wheel items={this.places} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
