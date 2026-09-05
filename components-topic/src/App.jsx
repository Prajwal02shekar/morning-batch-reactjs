import React, { Component } from 'react'
import Navbar from './pages/Navbar'
import Footer from './pages/Footer'
import HomePage from './pages/HomePage'

export default class App extends Component {
  render() {
    return (
      <div>
        {/* <h1>Iam a class based component of App.jsxx</h1> */}

        <Navbar/>
        <HomePage/>
        <Footer/>

      </div>
    )
  }
}
