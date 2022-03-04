import React from 'react'
import logo from './logo.svg'
import './header.css'

import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='container'>
      <img id='logo' src={logo} />
      <div id='end'>
        <a href='https://github.com/simoneWeipert'><FaGithub className='icon' /></a> <FaLinkedin className='icon'/> </div>
    </div>
  )
}

export default Header