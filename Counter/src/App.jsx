import { useState } from 'react'
import './App.css'

function App() {

  let [counter,setcounter]=useState(0)
  //let counter = 15
  const addValue = () => {
    
    counter = counter + 1
    setcounter(counter)
    //setcounter callback accept karta hai, this is a hidden feature
    /*
    setcounter((prevCounter) => {return prevCounter + 1}) # prevcounter en name hai bass ye counter ki value fetch karke lata hai
    setcounter((counter)=>counter+1) 
    setcounter(counter => counter+1)
    ye tenno ek hai hai 
    */
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