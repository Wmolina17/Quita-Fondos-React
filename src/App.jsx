import React from 'react'
import { NavBar } from './components/NavBar'
import { RemoveBackground } from './components/RemoveBackground'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <div>
      <NavBar />
      <div className="">
        <RemoveBackground />
      </div>
      <Footer />
    </div>
  )
}