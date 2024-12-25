// import { useState } from 'react'

import Home from './components/pages/Home'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Signup from './components/pages/Signup'

function App() {

  return (
    <div className='bg-[#F5F5F5]'>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/' element={<Signup />} />
      </Routes>
    </div>
  )
}

export default App
