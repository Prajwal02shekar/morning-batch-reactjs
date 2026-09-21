import React, { useState } from 'react'
import CommonFun from './HOC'

const Pavan = (props) => {
    console.log(props)
   
  return (
    <div>
      <h1>Pavan is Donating ₹{props.money}/-</h1>
      <button onClick={props.handleMoney}>Donate More Money</button>
    </div>
  )
}

export default CommonFun(Pavan)
