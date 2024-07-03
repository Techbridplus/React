import { useState } from 'react'
import './App.css'

function App() {

  let [counter,setcounter]=useState(0)
  //let counter = 15
  const addValue = () => {
    
    counter = counter + 1
    setcounter(counter)
  }

 const removeValue = () => { 
  counter = counter - 1 
  setcounter(counter)
  }
  
  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>

      <button
      onClick={addValue}
      >Add value {counter}</button> 
      <br />
      <button onClick={removeValue}>remove value {counter}</button>
      <p>footer : {counter}</p>
    </>
  )
}

export default App
//