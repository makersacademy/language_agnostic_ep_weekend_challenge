import React, { Component } from 'react';
import './body.css';

class Body extends Component {
  render() {
    return (
      <img src={this.props.src} key={this.props.index}
      alt="missing"/>
    );
  }
}

export default Body;
