import React from 'react'
import Navbar from './assets/Navbar'
import Home from './assets/Home'
import Skill from './assets/Skill'
import Project from './assets/Project'
import Education from './assets/Education'
import { Route, Routes } from 'react-router-dom'
import Blur from './assets/Blur'
import Footer from './assets/Footer'
import { Contact } from "./assets/Contact";

const App = () => {
  return (
    <div className='bg-[#050414]'>
      <Blur position={{top: '35%',left: '20%'}} size={{width: '30%', height: '40%'}}></Blur>
        <div className='pointer-events-none absolute inset-0 bg-[linear-gradient(...)]'>
          <div className='relative pt-20'>

          </div>

        </div>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/skill" element={<Skill/>}/>
          <Route path="/education" element={<Education/>}/>
          <Route path="/project" element={<Project/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
        <Footer/>

    </div>
  )
}

export default App
