import React from 'react'
import './header.css'
import CTA from './CTA'
import HeaderSocial from './HeaderSocials'
import Lottie from 'react-lottie';
import animationData from '../../assets/avatar.json';

const Header = () => {

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>John Liu</h1>
        <h5 className='text-light'>Software Engineer</h5>
        <CTA />
        <HeaderSocial />

        <div className="header_lottie">
          <Lottie options={defaultOptions} alt='header lottie'/>
        </div>

        <a href="mailto:liuyuhengs@gmail.com" className='email'>liuyuhengs@gmail.com</a>
      </div>
    </header>
  )
}

export default Header