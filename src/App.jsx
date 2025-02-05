import React from 'react'
import Login from './pages/Login'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  return (

    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/home' element={<Home />} />
    </Routes>

  )
}

export default App