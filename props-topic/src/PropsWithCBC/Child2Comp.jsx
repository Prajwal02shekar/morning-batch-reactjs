import React, { Component } from 'react'

export default class Child2Comp extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <h1>Child 2 Component</h1>
        <h3>My name is {this.props.user}</h3>
        <h3>My address is {this.props.address}</h3>

      </div>
    )
  }
}
