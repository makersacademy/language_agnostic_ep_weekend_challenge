import React, { Component } from 'react';
import '../containers/App.css'

class Header extends Component {

  render() {
    return (
      // {this.props.togglenewpost}
      <div className="App-header">
      <h1>Not Instagram</h1>
      <button name="newPost" id="newPost" onClick={this.props.toggleNewPost}>New Post</button>
      </div>
    )
  }
}

export default Header
