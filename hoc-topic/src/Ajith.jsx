import React, { useState } from 'react'
import CommonFun from './HOC'

const Ajith = ({money,handleMoney}) => {
    return (
        <div>
            <h1>Ajith is Donation ₹{money}/-</h1>
            <button onClick={handleMoney}>Donate More money</button>
        </div>
    )
}

export default CommonFun(Ajith)
