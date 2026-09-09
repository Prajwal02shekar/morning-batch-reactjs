import React, { Component } from 'react'
import Example1 from './StatesWithCBC/Example1'
import CouterAppWithCBC from './StatesWithCBC/CouterAppWithCBC'
import ExampleFBC from './StatesWithFBC/ExampleFBC'
import Counter from './StatesWithFBC/Counter'

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>App JSX</h1>
        {/* <Example1/> */}
        {/* <CouterAppWithCBC/> */}
        {/* <ExampleFBC/> */}
        <Counter/>
      </div>
    )
  }
}
