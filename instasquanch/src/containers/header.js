import React, { Component } from 'react';
import Button from '../components/button'
import './header.css';

class Header extends Component {


  addImage() {

  }

  delImage() {
    console.log('Delete button tapped')
  }

  render() {
    return (
      <div className="Header">
        <header className="headerBox">
          <img src={this.props.logo} className="headerLogo" alt="logo" />
          <p>
            Welcome to InstaSquanch!
          </p>
          <Button onClick={this.addImage} buttonText="+" />
          <Button onClick={this.delImage} className="Button" buttonText="-" />
        </header>
      </div>
    );
  }
}

export default Header;
