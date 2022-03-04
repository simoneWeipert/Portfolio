import React from 'react'
import './Nav.css'
import {GrHomeRounded} from 'react-icons/gr'
import {AiOutlineUser}  from 'react-icons/ai'
import {GiBrain} from 'react-icons/gi'

const Nav = () => {
  return (
    <div className='menu'><GrHomeRounded className='menuIcon'/><AiOutlineUser className='menuIcon'/><GiBrain className='menuIcon'/></div>
  )
}

export default Nav