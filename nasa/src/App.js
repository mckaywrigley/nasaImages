import React, { Component } from "react";

import "./App.css";
import SearchBar from "./components/SearchBar";
import Images from "./components/Images";

class App extends Component {
  render() {
    return (
      <div>
        <h1>NASA Image Search</h1>
        <SearchBar />
        <Images />
      </div>
    );
  }
}

export default App;
