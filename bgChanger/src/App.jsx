import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  let [color, setColor] = useState("olive")
  return (

      <div className='h-screen w-screen ' style={{backgroundColor:color}}>
        <div className='bg-white'>
          <button className='bg-red-700 rounded-lg m-3' onClick={()=>setColor("red")}>
            red
          </button>
          <button className='bg-green-700 rounded-lg m-3' onClick={()=>setColor("green")}>
            red
          </button>
          <button className='bg-blue-700 rounded-lg m-3' onClick={()=>setColor("blue")}>
            red
          </button>
          <button className='bg-yellow-500 rounded-lg m-3' onClick={()=>setColor("yellow")}>
            red
          </button>
        </div>
        
      </div>
   
  )
}

export default App
