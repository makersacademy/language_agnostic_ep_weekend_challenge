import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Header from './containers/header.js'
import Enzyme, { mount, shallow, render } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

describe('LandingPage', () => {
  let props
  let mountedAppPage
  const appPage = () => {
    mountedAppPage = mount(<App {...props}/>)
    return mountedAppPage
  }

  beforeEach(() => {
    props = {
      images: undefined
    }
    mountedAppPage = undefined
  })

  it('always renders a div', () => {
    const divs = appPage().find('div')
    expect(divs.length).toBeGreaterThan(0)
  })

  it('should render correctly in "debug" mode', () => {
    const component = shallow(<App debug />);

    expect(component).toMatchSnapshot();
  });
})
