import React, { Component } from 'react';
import Post from '../components/Post'


import axios from 'axios';
import './App.css';
const BASE_URL = 'http://localhost:5001/';


class Gallery extends Component {

  constructor(props) {
    super(props);
    this.state = {
      images: []
    }
  }

  

  async componentDidMount(){
      let response = await axios.get(BASE_URL + 'api/images');
      console.log(response)
      this.setState({
          images:response.data
      })
  }

  render() {
    return (
      <div>


      <div className="gallery">
      {this.state.images.map ((image, index) => {
        return <div className='gallery_item' key={index}><Post image={image} key={index} classname="gallery_image"/>

        </div>
      })}
      </div>
      </div>
    );
  }
}

export default Gallery;
