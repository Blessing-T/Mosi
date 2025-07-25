import React from 'react'
import {Route, Routes } from 'react-router-dom'
import Student from './pages/Student'
import Contact from './pages/Contact'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Enroll from './pages/Enroll'
import Home from './pages/Home'
import LoginIn from './pages/LoginIn'
import Portal from './pages/Portal'
import ComingSoon from './pages/ComingSoon';
import SignIn from './pages/SignIn';
import StudentDashboard from './pages/Student-portal'

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/student' element={<Student/>} />
        <Route path='/contact' element={<Contact/>} />
         <Route path='/enroll' element={<Enroll/>} />
         <Route path="/signin" element={<SignIn />} />
         <Route path="/ComingSoon" element={<ComingSoon />} />
        <Route path='/portal' element={<Portal />} />
        <Route path='/loginIn' element={<LoginIn />} />
        <Route path='/Student-portal' element={<StudentDashboard />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
