import { useState } from 'react'
import './App.css'
import './index.css'

function Counter() {
  const [counter, setCounter] = useState(0)

  function addValue() {
    setCounter((counter) => counter + 1)
  }

  function removeValue() {
    setCounter((counter) => counter - 1)
  }

  function resetCounter() {
    setCounter((counter) => counter = 0)
  }

  const backgroundColour =
    counter === 0 ? "grey" : counter < 0 ? "#702963" : "green";

  const textColour = counter === 0 ? "pink" : counter < 0 ? "red" : "#FFFF8F";

  return (
    <div
      style={{
        backgroundColor: backgroundColour,
        color: "white",
        minHeight: "100vh",
        transition: "background-color 0.5s, color o.5s",
        padding: "65px"
      }}
    >
      <h1>Counter value: <span style={{ color: textColour }}>{counter}</span></h1>
      <br />

      <div style={{ marginBottom: "10px", marginTop: "10px" }}>
        <button onClick={addValue} style={{ cursor: "pointer" }}>Add value</button></div>

      <br />
      <div style = {{marginBottom: "10px"}}>
      <button onClick={removeValue} style={{ cursor: "pointer" }}>Remove value</button></div>

      <br />
      <button onClick={resetCounter} style={{ cursor: "pointer" }}>Reset Counter</button>
    </div>
  )
}

export default Counter
