import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Layout from './layout/Layout'
import Home from './pages/Home'
import Admin from './pages/Admin'
import Add from './pages/Add'



function App() {
  const [count, setCount] = useState(0)

  return (
    
    <Routes>
      <Route>
        <Route element={<Layout/>} path='/'/>
        <Route index element={<Home/>}></Route>
        <Route element={<Admin/>} path='/admin'></Route>
        <Route element={<Add/>} path='/add'></Route>
      
      </Route>
    </Routes>
  )
}

export default App
