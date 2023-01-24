import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/john-liu-9217a110a/' target="_blank" rel="noopener noreferrer"><BsLinkedin/></a>
        <a href='https://github.com/JohnlLiu' target="_blank" rel="noopener noreferrer"><FaGithub/></a>
    </div>
  )
}

export default HeaderSocials