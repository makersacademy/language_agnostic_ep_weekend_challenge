import React, { Component } from 'react';
import Header from './containers/header'
import Body from './containers/body'

class App extends Component {
  constructor(){
    super()
    this.state = {
      images: []
    }
  }

  componentDidMount(){
    this.setState({images: 'https://f4.bcbits.com/img/0010067948_20.jpg'})
  }
  render() {
    return (
      <div className='headerDiv'>
        <Header />
        <Body src={this.state.images}/>
      </div>
    );
  }
}

export default App;
