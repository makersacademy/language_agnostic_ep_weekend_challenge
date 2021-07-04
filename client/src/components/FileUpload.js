import React, { Component } from 'react';
import axios from 'axios';
import ImageFilter from 'react-image-filter';
const BASE_URL = 'http://localhost:5001/';


class FileUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      imageUrls: [],
      message: '',
      user: sessionStorage.getItem('myData'),
      caption: '',
      filter:''
    }
  }

  handleChange = (event) => {
    this.setState({
        [event.target.name] : event.target.value
    })
    console.log(this.state)
  }

  updateFilters = () => {
    console.log('filters')
    var formdata = {filters:'sepia'}
    return axios.patch(BASE_URL + 'api/images/' + this.state.id , formdata)
    .then(response => {
      console.log(response.data)
      ;
    console.log("db filters")

  })
  // .then(window.location.reload())
  }

  selectImages = (event) => {
    let images = []
    for (var i = 0; i < event.target.files.length; i++) {
      images[i] = event.target.files.item(i);
    }
    images = images.filter(image => image.name.match(/\.(jpg|jpeg|png|gif)$/))
    let message = `${images.length} valid image(s) selected`
    this.setState({ images, message })
    // console.log(this.state.message)
  }

  uploadImages = () => {
    const uploaders = this.state.images.map(image => {
      const data = new FormData();
      console.log(image.name)
      data.append("image", image, image.name);
      // console.log(data.append("image", image, image.name))
      // Make an AJAX upload request using Axios
      return axios.post(BASE_URL + 'upload', data)
      .then(response => {

        this.setState({
        imageUrls: [ response.data.imageUrl, ...this.state.imageUrls ]
      });
      updateDatabase()
      console.log(this.state.imageUrls[0])
    })
    });

    const updateDatabase = () => {
      var formdata = {image:this.state.imageUrls[0],caption:this.state.caption,user:this.state.user}
      return axios.post(BASE_URL + 'api/images', formdata)
      .then(response => {
        console.log(response.data)
        this.setState({
        id: response.data._id
      });
      console.log("db")

    })
    .then(window.location.reload())
    }



    // Once all the files are uploaded
    axios.all(uploaders).then(() => {
      console.log('done');
    }).catch(err => alert(err.message));


  }



  render() {
    return (
      <div>
        <div className="col-sm-12">

          <div>
          <label htmlFor="caption">Caption: </label>
            <textarea onChange={this.handleChange} name="caption" id="caption"></textarea>
          </div>
          <div>
            <label htmlFor="image">Select your image: </label><input className="form-control " id="image" name="image" type="file" onChange={this.selectImages} multiple/>
          </div>
          <p className="text-info">{this.state.message}</p>
          <div className="row col-lg-12">
            {
            this.state.imageUrls.map((url, i) => (
            <div className="gallery_item centered"  key={i}>  <ImageFilter
         image={BASE_URL + url}
         filter={ 'sepia' } // see docs beneath
         // colorOne={ [40, 250, 250] }
         // colorTwo={ [250, 150, 30] }
       />

              </div>
            ))
            }
          </div>
          <div className="col-sm-4">
            <button className="btn btn-primary" value="Submit"
            onClick={this.uploadImages}>Submit</button>
          </div>

          {/*<div className="col-sm-4">
            <button className="btn btn-primary" value="Submit"
            onClick={this.updateFilters}>Update filter</button>
          </div>*/}
        </div>


      </div>
    );
  }
}
export default FileUpload;
