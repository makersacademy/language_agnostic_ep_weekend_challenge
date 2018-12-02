import React, { Component } from 'react';
import Header from './containers/header'
import Body from './containers/body'
import logo from './rick_and_morty_logo.svg';

let fakeServerData = [{src:'https://f4.bcbits.com/img/0010067948_20.jpg'},
{src:'https://i.ytimg.com/vi/0vfLj6kaSFY/maxresdefault.jpg'},
{src:'https://i.redd.it/tfp6ryte6fsy.jpg'},
{src:'https://i.imgflip.com/tjezd.jpg'}]

class App extends Component {
  constructor(){
    super()
    this.state = {
      logo: logo,
      images: []
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({logo: logo, images: fakeServerData, ready: true})
    },1000)
  }

  render() {
    return (
      <div className='headerDiv'>
        {this.state.ready
          ?<div>
          <Header logo={this.state.logo} msg="Welcome to InstaSquanch!"/>
            <div className='imageList'>
              {this.state.images.map ((image, index) => {
                return <div className ='img' key={'lisi' + index}> <Body image={image} key={index}/></div>
                })
              }

            </div>
          </div>
          :<Header logo={this.state.logo} msg="Squanching..."/>}
        </div>
      );
    }
}

export default App;
