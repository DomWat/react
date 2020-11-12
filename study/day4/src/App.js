import React, { useState } from 'react'

function App() {
  let [counter, setCounter] = useState(0)


  let handleIncrement = () => {
    setCounter(counter + 1)
  }

  let handleDecrement = () => {
    setCounter(counter - 1)
  }

  return(
    <div>
      <h1>{counter}</h1>
      <button onClick = {handleIncrement}>Increment</button>
      <button onClick = {handleDecrement}>Decrement</button>
    </div>
  )

}

export default App;
