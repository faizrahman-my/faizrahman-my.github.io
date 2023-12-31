import { useState } from 'react'
import './App.css'
import { Route, Router, Routes, Link, HashRouter } from 'react-router-dom'
import { Home } from './pages/Home'
import { NotFound } from './pages/NotFound'
import { Project } from './pages/Project'
import { About } from './pages/About'
import { Contact } from './pages/Contact'

function App() {

  return (
      <HashRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/project' element={<Project />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </HashRouter>
  )
}

export default App
