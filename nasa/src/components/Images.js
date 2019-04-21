import React, { Component } from "react";
import { connect } from "react-redux";
import { getImages } from "../actions";

class Images extends Component {
  render() {
    console.log(this.props.images.images);
    return (
      <div>
        <h2>Images</h2>
        {this.props.images.images.map(image => {
          return (
            <div key={image.id}>
              <img src={image.urls.small} />
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  images: state.nasa
});

export default connect(
  mapStateToProps,
  null
)(Images);
