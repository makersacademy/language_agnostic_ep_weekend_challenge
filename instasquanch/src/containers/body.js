import React, { Component } from 'react';
import './body.css';

class Body extends Component {
  render() {
    console.log(this.props.image)
    return (
      <img src={this.props.image.src}
      alt="missing"/>
    );
  }
}

export default Body;
