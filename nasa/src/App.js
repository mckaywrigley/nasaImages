import React, { Component } from "react";

import "./App.css";
import SearchBar from "./components/SearchBar";
import Images from "./components/Images";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Image Search</h1>
        <SearchBar />
        <Images />
      </div>
    );
  }
}

export default App;
