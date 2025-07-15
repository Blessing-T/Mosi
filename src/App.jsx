import React from 'react'
import {Route, Routes } from 'react-router-dom'
import Student from './pages/Student'
import Contact from './pages/Contact'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
<<<<<<< HEAD
import Enroll from './pages/Enroll'
=======
>>>>>>> a29aa9f (changes)
import Home from './pages/Home'
import LoginIn from './pages/LoginIn'
import Portal from './pages/Portal'
import ComingSoonPage from './pages/ComingSoon';


function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
<<<<<<< HEAD
        <Route path='/student' element={<Student/>} />
        <Route path='/contact' element={<Contact/>} />
         <Route path='/enroll' element={<Enroll/>} />
         <Route />
=======
        <Route path='/LoginIn' element={<LoginIn />} />
        <Route path='/student' element={<Student />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/portal' element={<Portal />} />
        <Route path='/ComingSoon' element={<ComingSoonPage />} />
>>>>>>> a29aa9f (changes)
      </Routes>
      <Footer />
    </div>
  )
}

export default App
