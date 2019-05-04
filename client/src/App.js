import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import MainMap from "./components/Map.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainMap />
      </div>
    );
  }
}

export default App;
