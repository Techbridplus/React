import { useState } from 'react'
import { Header,Footer } from './components'
import { Outlet } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <div className='pt-20'>
        <Outlet/>
      </div>
      
      <Footer/>
    </>
  )
}

export default App
