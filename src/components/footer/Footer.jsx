import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>

      <div className='footer__note'>
        <a href='https://github.com/JohnlLiu/portfolio' target="_blank">Designed & Built by John Liu</a> 
      </div>
      <div className='footer__note2'>
        <small>Design Inspired by EGATOR</small> 
      </div>

    </footer>
  )
}

export default Footer