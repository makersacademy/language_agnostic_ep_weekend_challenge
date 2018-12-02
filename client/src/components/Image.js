import React, { Component } from 'react';
// import Modal from 'react-modal';
import '../containers/App.css'
const BASE_URL = 'http://localhost:5001/'



class Post extends Component {





  render() {
    return (
      <div id={this.props.image._id} >
        <div className="username">{this.props.image.user}</div>
        <div className="date">{this.props.image.date}</div>
        <div ><img onClick={this.props.useModal} src={BASE_URL + this.props.image.image} alt={this.props.caption} className={this.props.className}/></div>
        <div className="caption">{this.props.image.caption}</div>

      </div>
    )
  }
}

export default Post
