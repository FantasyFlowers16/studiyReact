import React, { useState } from 'react'
const Counter = function () {
    const [counter, setCount] = useState(0)
    function Increment () {
      setCount(counter + 1)
      console.log(counter)
    }
    function Decriment () {
      setCount(counter - 1)
    }
    return (
      <div>
        <h1>{counter}</h1>
        <button onClick={Decriment}>Decriment</button>
        <button onClick={Increment}>Increment</button>
      </div>
    )
 }
 export default Counter