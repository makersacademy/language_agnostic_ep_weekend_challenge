import React, { Component } from 'react';
import './button.css';

class Button extends Component {
  render() {
    return (
      <button className={this.props.className} type="submit" onClick={this.props.onClick}>{this.props.buttonText}</button>
    );
  }
}

export default Button;
