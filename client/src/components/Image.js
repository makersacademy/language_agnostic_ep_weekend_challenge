import React, { Component } from 'react';
import Modal from 'react-modal';
import '../containers/App.css'
const BASE_URL = 'http://localhost:5001/'

// import * as serviceWorker from './serviceWorker';
const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

class Post extends Component {

  constructor(props) {
    super(props);
    this.state = {  modalIsOpen: false}

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);

  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    // this.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }


  render() {
    return (
      <div id={this.props.image._id} >
        <div className="username">{this.props.image.user}</div>
        <div className="caption">{this.props.image.caption}</div>
        <div ><img onClick={this.props.useModal} src={BASE_URL + this.props.image.image} alt={this.props.caption} className={this.props.className}/></div>
        <div className="date">{this.props.image.date}</div>
      </div>
    )
  }
}

export default Post
