import React from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Home from './components/home/Home'
import Projects from './components/pages/Projects'
import Resume from './components/pages/Resume'
import Contact from './components/pages/Contact'
import { Route, Routes } from 'react-router-dom'
import About from './components/pages/About'
import Footer from './components/footer/Footer'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const App = () => {
  return ( 
    <>
     <Navbar /> 
     <ToastContainer />
     <div className="container">
       <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/resume' element={<Resume />}></Route>
        <Route path='/projects' element={<Projects />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
     </Routes>
     </div>

     <Footer />
    </>
  )
}

export default App
