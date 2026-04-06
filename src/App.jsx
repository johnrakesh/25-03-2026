import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import { Home } from './components/home'
import './App.css'
import { Navbar } from './components/Navbar'
import { Register } from './components/Register'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { NotFound } from './components/NotFound'

export function App() {
  

  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/register" element={<Register/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
      <Route path="*" element={<NotFound/>}></Route>
    </Routes>
    </>
  )
}

export default App
