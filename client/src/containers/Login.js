import React, { Component } from 'react';


import LoginForm from '../components/LoginForm'
import RegisterForm from '../components/RegisterForm'
// import axios from 'axios';
import './App.css';
// const BASE_URL = 'http://localhost:5001/';


class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }





  render() {
    return (


      <div className="login_form">
      <h2>Login/Register</h2>
      <RegisterForm setUser={this.props.setUser}/>
      <LoginForm setUser={this.props.setUser}/>
      </div>
    );
  }
}

export default Login;
