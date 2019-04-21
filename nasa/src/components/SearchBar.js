import React, { Component } from "react";

class SearchBar extends Component {
  constructor() {
    super();
    this.state = {
      search: ""
    };
  }

  render() {
    return (
      <div>
        <h2>Search Bar</h2>
        <input
          type="text"
          name="search"
          value={this.state.search}
          placeholder="search"
        />
      </div>
    );
  }
}

export default SearchBar;
