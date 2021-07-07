import React, { Component } from 'react';
import './button.css';

class Button extends Component {
  render() {
    return (
      <button type="submit"
      className="Button" onClick={this.props.onClick}>
      {this.props.buttonText}</button>
    );
  }
}

export default Button;
