import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Card'

function App() {
  const [count, setCount] = useState(0)
  // let myObj = {
  //   username: "hitesh",
  //   age: 21
  // }
  // let description="My name is gaurav joshi I am software developer and i make my carrier as a software Engineer"
  // let newArr = [1, 2, 3]

  return (
    <>
    <div className='bg-black h-screen w-screen'>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind test</h1>
          <Card username="chaiaurcode" btnText="click me" description="My name is gaurav joshi I am software developer and i make my carrier as a software Engineer"/>
          <Card username="hitesh" />
    </div>
     
    </>
  )
}

export default App