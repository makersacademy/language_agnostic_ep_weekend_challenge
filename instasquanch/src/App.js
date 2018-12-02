import React, { Component } from 'react';
import Header from './containers/header'
import Body from './containers/body'

class App extends Component {
  constructor(){
    super()
    this.state = {
      images: [{src:'https://f4.bcbits.com/img/0010067948_20.jpg'},
      {src:'https://i.ytimg.com/vi/0vfLj6kaSFY/maxresdefault.jpg'},
      {src:'https://i.redd.it/tfp6ryte6fsy.jpg'},
      {src:'https://i.imgflip.com/tjezd.jpg'}]
    }
  }

  componentDidMount(){

  }
  render() {
    return (
      <div className='headerDiv'>
        <Header />
        <div className='imageList'>
        {this.state.images.map ((image, index) => {
          return <div className ='img' key={'lisi' + index}> <Body src={image.src} key={index}/></div>
        })
      }
    </div>
      </div>
    );
  }
}

export default App;
