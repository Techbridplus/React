import { useState } from 'react'
import React from 'react';
import Footer from './components/Footer/Footer.jsx'
import Header from './components/Header/Header.jsx'
import { Outlet } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
      <>
        <Header/>
        <Outlet/>
        <Footer/>
      </>
    )
}



export default App
