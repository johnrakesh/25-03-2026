import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Navbar } from '../routes/App.jsx'
import { Register } from '../routes/Register.jsx'
import { Users } from '../routes/Users.jsx'
import { Localstorage } from './13-04-2026/Localstorage.jsx'

import { Root } from './13-04-2026/parent.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      
      <Root />
      
      {/* <Routes>
      <Route path="/" element={<Register />}></Route>
      <Route path="/users" element={<Users/>}></Route>
      <Route path="/users/:id" element={<Users/>}></Route>
   
    </Routes> */}
    </BrowserRouter>
  
)
