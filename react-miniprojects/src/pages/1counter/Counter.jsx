import React, {useState} from 'react'

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
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: backgroundColour,
        color: "white",
        minHeight: "100vh",
        transition: "background-color 0.5s, color o.5s",
        padding: "65px"
      }}>
      <h1 style={{fontSize: '110px'}}>Counter value:<span style={{ color: textColour, fontSize: '100px' }}>{counter}</span></h1>
      <br />

      <div style={{ marginBottom: "10px", marginTop: "10px" }}>
        <button onClick={addValue} style={{ cursor: "pointer", backgroundColor: 'black', padding: '5px', borderRadius: '10px', width: '200px', height: '100px' }}>Add value</button></div>

      <br />
      <div style = {{marginBottom: "10px"}}>
      <button onClick={removeValue} style={{ cursor: "pointer", backgroundColor: 'black', padding: '5px', borderRadius: '10px', width: '200px', height: '100px' }}>Remove value</button></div>

      <br />
      <button onClick={resetCounter} style={{ cursor: "pointer", backgroundColor: 'black', padding: '5px', borderRadius: '10px', width: '200px', height: '100px' }}>Reset Counter</button>
    </div>
  )
}
export default Counter