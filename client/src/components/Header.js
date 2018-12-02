import React, { Component } from 'react';
import '../containers/App.css'

class Header extends Component {

constructor(props) {
  super(props)
console.log(this.props)
}

componentWillReceiveProps({someProp}) {
  console.log("PROPS")
  this.setState(this.state)
  console.log(this.props.loggedIn)
}

  render() {
    return (
      // {this.props.togglenewpost}
      <div className="App-header">
      <h1>!Instagram</h1>
      <div>

      { this.props.loggedIn && <button name="newPost" className="headerButtons" id="newPost" onClick={this.props.toggleNewPost}>New Post</button> }
      { !this.props.loggedIn && <button name="Login" className="headerButtons" id="Login" onClick={this.props.toggleLogin}>Login or Register</button>}User: {this.props.user}
      { this.props.loggedIn && <button name="logout" className="headerButtons" id="logout" onClick={this.props.toggleLogout}>Logout</button> }
      </div>
      </div>
    )
  }
}

export default Header
