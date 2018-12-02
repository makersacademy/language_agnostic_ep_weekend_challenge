import React, { Component } from 'react';
import Button from '../components/button'
import logo from '../rick_and_morty_logo.svg';
import './header.css';

class Header extends Component {


  addImage() {
    console.log('Add button tapped')
  }

  delImage() {
    console.log('Delete button tapped')
  }

  render() {
    return (
      <div className="Header">
        <header className="headerBox">
          <img src={logo} className="headerLogo" alt="logo" />
          <p>
            Welcome to InstaSquanch!
          </p>
          <Button onClick={this.addImage} className="addButton" buttonText="+" />
          <Button onClick={this.delImage} className="deleteButton" buttonText="-" />
        </header>
      </div>
    );
  }
}

export default Header;
