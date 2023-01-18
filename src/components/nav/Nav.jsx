import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBriefcase} from 'react-icons/bi'
import {BiBook} from 'react-icons/bi'
import {BiMessageSquareDetail} from 'react-icons/bi'
import {AiOutlineProject} from 'react-icons/ai'
import {useState} from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href='#' onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active': ''}><AiOutlineHome/></a>
      <a href='#about' onClick={() => setActiveNav('about')} className={activeNav === 'about' ? 'active': ''}><AiOutlineUser/></a>
      <a href='#projects' onClick={() => setActiveNav('projects')} className={activeNav === 'projects' ? 'active': ''}><AiOutlineProject/></a>
      <a href='#education' onClick={() => setActiveNav('education')} className={activeNav === 'education' ? 'active': ''}><BiBook/></a>
      <a href='#experience' onClick={() => setActiveNav('experience')} className={activeNav === 'experience' ? 'active': ''}><BiBriefcase/></a>
      <a href='#contact' onClick={() => setActiveNav('contact')} className={activeNav === 'contact' ? 'active': ''}><BiMessageSquareDetail/></a>
    </nav>
  )
}

export default Nav