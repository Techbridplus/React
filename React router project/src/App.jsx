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
        <Outlet/>//This is the place where the child components will be rendered ##jisko select kiya jayega uska content yaha render hoga
        //so <outlet/> dynamically render the child components 
        <Footer/>
      </>
    )
}



export default App
