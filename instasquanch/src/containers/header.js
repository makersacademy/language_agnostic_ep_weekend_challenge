import React, { Component } from 'react';
import Button from '../components/button'
import './header.css';

class Header extends Component {


  addImage() {

  }

  delImage() {

  }

  render() {
    return (
      <div className="Header">
        <header className="headerBox">
          <img src={this.props.logo} className="headerLogo" />
          <p>
            <h1>{this.props.msg}</h1>
          </p>
          <Button onClick={this.addImage} buttonText="+" />
          <Button onClick={this.delImage} className="Button" buttonText="-" />
        </header>
      </div>
    );
  }
}

export default Header;
