import React from 'react'
import { Route, Router, Routes } from 'react-router'
import Home from '../pages/Home.jsx'
import Auth from '../pages/Auth.jsx'

const App = () => {
  return (
    <Routes>
      <Route path='/auth' element={<Auth/>}/>
      <Route path='/' element={<Home/>} />
    </Routes>
  )
}

export default App
