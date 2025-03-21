import React from 'react'
import Home from './Pages/Home'
import Favorite from './Pages/Favorite'
import { MovieProvider } from './Contexts/MovieContext'
import { Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'

function App() {

  return (
    <MovieProvider>
      
   <main className='main-content'>
   <Navbar />
    <Routes>
     <Route path='/' element={<Home />}/>
     <Route path='/favorite' element={<Favorite />}/>
    </Routes>
   </main>
   </MovieProvider>
  )
}

export default App