import React, { Component } from 'react';
import Modal from 'react-modal';
import Image from './Image';
import '../containers/App.css'
// const BASE_URL = 'http://localhost:5001/'

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
    this.state = {  modalIsOpen: false,id:this.props.image._id}

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.addComment = this.addComment.bind(this);
    // console.log(this.props.image._id)

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

  addComment(id) {
    alert(this.state.id)
  }


  render() {
    return (
      <div id={this.props.image._id} >
        <Image useModal={this.openModal} image={this.props.image} className="gallery_image"/>

         <Modal
           isOpen={this.state.modalIsOpen}
           onAfterOpen={this.afterOpenModal}
           onRequestClose={this.closeModal}
           style={customStyles}
           contentLabel="Example Modal"
         >
         <Image image={this.props.image}/>
         <div>Add comments</div>
         <div><textarea name="comments" id="comments"></textarea></div>
         <button type="submit" onClick={this.addComment}>Add comment</button>
 </Modal>
      </div>
    )
  }
}

export default Post
