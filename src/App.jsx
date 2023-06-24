import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import Register from './pages/Register'
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home />}/>
        <Route path='/register' element={<Register />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
