import React, { Component } from 'react';
import axios from 'axios';
const BASE_URL = 'http://localhost:5001/';

class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username:'',
      password:'',
      realname:'',
      email:''
    }
    console.log(this.props)
  }

  handleChange = (event) => {
    this.setState({
        [event.target.name] : event.target.value
    })
    console.log(this.state)
  }


     submitForm = () => {
      var formdata = {username:this.state.username,password:this.state.password,realname:this.state.realname,email:this.state.email}
      return axios.post(BASE_URL + 'api/users', formdata)
      .then(response => {
      //   this.setState({
      //   imageUrls: [ response.data.imageUrl, ...this.state.imageUrls ]
      // });
      console.log("db")


    })
    .then(this.props.setUser(this.state.username))
    .then(window.location.reload())
    }






  render() {
    return (
      <div>
        <div className="col-sm-12">
          <div>
          <label htmlFor="username">Username: </label>
            <input type="text" onChange={this.handleChange} name="username" id="username"/>
          </div>
          <div>
          <label htmlFor="password">Password: </label>
            <input type="password" onChange={this.handleChange} name="password" id="password"/>
          </div>
          <div>
          <label htmlFor="realname">Real name: </label>
            <input type="text" onChange={this.handleChange} name="realname" id="realname"/>
          </div>
          <div>
          <label htmlFor="email">Email: </label>
            <input type="email" onChange={this.handleChange} name="email" id="email"/>
          </div>

          <div className="col-sm-4">
            <button className="btn btn-primary" value="Submit"
            onClick={this.submitForm}>Submit</button>
          </div>
        </div>


      </div>
    );
  }
}
export default RegisterForm;
