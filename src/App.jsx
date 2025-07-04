

import React from 'react'
import {Route, Routes } from 'react-router-dom'
import Student from './pages/Student'
import  Contact  from './pages/Contact'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Portal from './pages/Portal'


function App() {
  return (
    <div>
  <Navbar />
      <Routes>
        <Route path='/student' element={<Student/>} />
        <Route path='/contact' element={<Contact/>} />
         <Route path='/portal' element={<Portal/>} />
         <Route />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
