import React, { Component } from 'react';
import Header from './containers/header'
import Body from './containers/body'
import logo from './rick_and_morty_logo.svg';

let fakeServerData = [{src:'https://f4.bcbits.com/img/0010067948_20.jpg', squanches: 0},
{src:'https://i.ytimg.com/vi/0vfLj6kaSFY/maxresdefault.jpg', squanches: 0},
{src:'https://i.redd.it/tfp6ryte6fsy.jpg', squanches: 0},
{src:'https://i.imgflip.com/tjezd.jpg', squanches: 0}]

function squanchUp() {
  this.image.squanches += 1
}

class App extends Component {
  constructor(){
    super()
    this.state = {
      logo: logo,
      images: [],
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({logo: logo, images: fakeServerData, ready: true, squanchUp})
    },1000)
  }

  render() {
    return (
      <div className='headerDiv'>
        {this.state.ready ?
          <div>
            <Header logo={this.state.logo} msg="Welcome to InstaSquanch!"/>
              <div className='imageList'>
                {this.state.images.map ((image, index) => {
                  return <div className ='img' key={'list' + index}> <Body image={image} key={index} squanchUp={this.state.squanchUp()}/></div>
                  })
                }
              </div>
          </div>
          :<Header logo={this.state.logo} msg="Squanching..."/>
        }
      </div>
    );
  }
}

export default App;
