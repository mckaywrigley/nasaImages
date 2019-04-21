import React, { Component } from "react";

import "./App.css";
import SearchBar from "./components/SearchBar";

class App extends Component {
  render() {
    return (
      <div>
        <h1>NASA Image Search</h1>
        <SearchBar />
      </div>
    );
  }
}

export default App;
