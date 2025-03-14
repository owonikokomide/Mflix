import React from 'react'
import Home from './Pages/Home'
import Favorite from './Pages/Favorite'
import { Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'

function App() {

  return (
    <div>
      <Navbar />
   <main className='main-content'>
    <Routes>
     <Route path='/' element={<Home />}/>
     <Route path='/favorite' element={<Favorite />}/>
    </Routes>
   </main>
   </div>
  )
}

export default App