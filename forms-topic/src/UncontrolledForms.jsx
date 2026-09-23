import React, { useRef, useState } from 'react'

const UncontrolledForms = () => {

    let [result, setResult] = useState(0)
    let num1Ref = useRef();
    let num2Ref = useRef();

    let addition = (e) => {
        e.preventDefault();
        console.log(num1Ref.current.value)
        console.log(num2Ref.current.value)

        console.log(parseInt(num1Ref.current.value) + parseInt(num2Ref.current.value))
        setResult(parseInt(num1Ref.current.value) + parseInt(num2Ref.current.value))
    }
    let subtraction = (e) => {
        e.preventDefault();
        console.log(num1Ref.current.value)
        console.log(num2Ref.current.value)
        console.log(parseInt(num1Ref.current.value) - parseInt(num2Ref.current.value))
        setResult(parseInt(num1Ref.current.value) - parseInt(num2Ref.current.value))
    }
    let multipliaction = (e) => {
        e.preventDefault();
        console.log(num1Ref.current.value)
        console.log(num2Ref.current.value)
        console.log(parseInt(num1Ref.current.value) * parseInt(num2Ref.current.value))
        setResult(parseInt(num1Ref.current.value) * parseInt(num2Ref.current.value))
    }
    return (

        <form>
            <fieldset>
                <legend>Form</legend>
                <label htmlFor="num1">Enter Number 1:</label>
                <input type="number" ref={num1Ref} id='num1' placeholder='Enter Number 1' /><br />
                <br />
                <label htmlFor="num1">Enter Number 2:</label>
                <input type="number" ref={num2Ref} id='num2' placeholder='Enter Number 2' /><br />
                <br />
                <h2>The result is {result}</h2>
                <button onClick={addition}>Addition</button>
                <button onClick={subtraction}>Subtraction</button>
                <button onClick={multipliaction}>Multiplication</button>
            </fieldset>
        </form>
    )
}

export default UncontrolledForms
