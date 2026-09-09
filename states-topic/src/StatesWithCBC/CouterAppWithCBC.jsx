import React, { Component } from 'react'

export default class CouterAppWithCBC extends Component {
    state={
        count:0
    }
    handleIncreement=()=>{
        this.setState({
            count:this.state.count+1
        })
    }
    handleDecreemnt=()=>{
        this.setState({
            count:this.state.count-1
        })
    }
    handleReset=()=>{
        this.setState({
            count:0
        })
    }
  render() {
    return (
      <div>
        <h1>Count :{this.state.count}</h1>
        <button onClick={this.handleIncreement}>Increment</button>
        <button onClick={this.handleDecreemnt}>Decrement</button>
        <button onClick={this.handleReset}>Reset</button>
      </div>
    )
  }
}
