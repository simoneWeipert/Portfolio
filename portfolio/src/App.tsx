import React from 'react'
import './App.css'
import About from './components/about/About'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import Skills from './components/Skills/Skills'

const App = () => {
  return (
    < >
    <Header></Header>
    <div id="welcome">
      <h4>Hallo! Ich bin</h4>
      <h1>Simone Weipert</h1>
    </div>
    <Nav></Nav>
    <About></About>
    <Skills></Skills>
    </>
  )
}

export default App
