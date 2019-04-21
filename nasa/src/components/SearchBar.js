import React, { Component } from "react";

import { connect } from "react-redux";
import { getImages } from "../actions";

class SearchBar extends Component {
  constructor() {
    super();
    this.state = {
      search: ""
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = term => {
    this.props.getImages(term);
    this.setState({
      search: ""
    });
  };

  render() {
    return (
      <div>
        <h2>Search Bar</h2>
        <input
          type="text"
          name="search"
          value={this.state.search}
          placeholder="search"
          onChange={this.handleChange}
        />
        <button onClick={e => this.handleSubmit(this.state.search)}>
          Search
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  images: state.nasa
});

export default connect(
  mapStateToProps,
  { getImages }
)(SearchBar);
