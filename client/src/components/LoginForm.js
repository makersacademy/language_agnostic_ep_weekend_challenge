import React, { Component } from 'react';
import axios from 'axios';
const BASE_URL = 'http://localhost:5001/';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username:'',
      password:'',
      results:''
    }
    // console.log(this.props)
  }



  handleChange = (event) => {
    this.setState({
        [event.target.name] : event.target.value
    })
    // console.log(this.state)
  }


     submitForm = () => {
       var self = this;
      var formdata = {username:this.state.username,password:this.state.password}
      return axios.post(BASE_URL + 'api/users/login', formdata)

      .then(function (response) {
        // console.log(response.data.length)
        // console.log(self)
        if (response.data.length>0){
    self.setState({
      results: response.data
      // isLoading: false,
    })
    // console.log(self.state.results)
self.props.setUser(self.state.username)
  }
  else {alert('no user')
// self.props.setUser(null)
}

  })

  // .then(console.log(this.state))
  .catch(function (error) {
    console.log(error);
  });


    // .then(console.log(data.data))
    // .then(window.location.reload())
    }






  render() {
    return (
      <div>
        <div className="col-sm-12">
          <div>
          <label htmlFor="username">Username: </label>
            <input type="text" onChange={this.handleChange} name="username" id="username_l"/>
          </div>
          <div>
          <label htmlFor="password">Password: </label>
            <input type="password" onChange={this.handleChange} name="password" id="password_l"/>
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
export default LoginForm;
