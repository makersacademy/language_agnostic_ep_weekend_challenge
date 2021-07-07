import React, { Component } from 'react';
import './body.css';

class Body extends Component {
  render() {
    return (
      <div>
        <button type="submit" onClick={this.props.squanchUp()}><img src={this.props.image.src} onClick={console.log('hsbdhg')}
      alt="missing"/></button>
    {this.props.image.squanches}
      </div>
    );
  }
}

export default Body;
