import React, { Component } from 'react';
import FileUpload from '../components/FileUpload'
import Gallery from './Gallery'
import Login from './Login'
import Header from '../components/Header'

import './App.css';

class App extends Component {

  constructor(props){
    super(props)
    var loggedIn
    console.log(sessionStorage.getItem('myData'))
    if (sessionStorage.getItem('myData')=== null) {
      loggedIn = false
    } else {
      loggedIn = true
    }
    this.state = {
      newposthidden:true,
      loginhidden:true,
      user: sessionStorage.getItem('myData'),
      loggedIn: loggedIn
    }

    this.toggleNewPost = this.toggleNewPost.bind(this);
    this.toggleLogin = this.toggleLogin.bind(this);
    this.toggleLogout = this.toggleLogout.bind(this);
    this.setUser = this.setUser.bind(this);
  }

  toggleNewPost() {

    console.log("toggle?")
    this.setState({newposthidden:!this.state.newposthidden})
  }
  toggleLogin() {
    // alert('test')
    console.log("toggle?")
    this.setState({loginhidden:!this.state.loginhidden})
  }
  toggleLogout() {
    console.log("toggle?")
    sessionStorage.clear()
    this.setState({user:'', loggedIn:false})

  }

  setUser(user) {
    sessionStorage.setItem('myData', user);
    this.setState({user: sessionStorage.getItem('myData'), loggedIn:true})
    window.location.reload()
  }

  render() {
    return (
      <div className="App">
        <Header toggleNewPost={this.toggleNewPost} toggleLogin={this.toggleLogin} toggleLogout={this.toggleLogout} loggedIn={this.state.loggedIn} user={this.state.user}/>
        {!this.state.newposthidden && <FileUpload />}
        {!this.state.loginhidden && <Login setUser={this.setUser}/>}

        <Gallery/>


      </div>
    );
  }
}

export default App;
