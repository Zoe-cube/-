import React, { Component, Fragment } from 'react'
import Header from './Header/Header.js'
import Body from './Body/Body.js'
import Footer from './Footer/Footer.js'

class App extends Component {
  render() { 
    return (
      <Fragment>
        <Header />
        <Body />
        <Footer />
      </Fragment>
      );
  }
}
 
export default App;