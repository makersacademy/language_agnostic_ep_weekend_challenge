import React, { Component } from 'react';
import FileUpload from '../components/FileUpload'
import Gallery from './Gallery'
import Header from '../components/Header'

import './App.css';

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      newposthidden:true
    }
    this.toggleNewPost = this.toggleNewPost.bind(this);
  }

  toggleNewPost() {
    // alert('test')
    console.log("toggle?")
    this.setState({newposthidden:!this.state.newposthidden})
  }

  render() {
    return (
      <div className="App">
        <Header toggleNewPost={this.toggleNewPost}/>
        {!this.state.newposthidden && <FileUpload />}

        <Gallery/>


      </div>
    );
  }
}

export default App;
