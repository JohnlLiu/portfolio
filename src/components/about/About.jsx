import React from 'react'
import './about.css'
import Lottie from 'react-lottie';
import ME from '../../assets/coding.json'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const about = () => {

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: ME,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>

        <div className='about__me'>
          <div className="me__lottie">
            <Lottie options={defaultOptions} alt='me'/>
          </div>
        </div>

        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about__icon'/> 
              <h5>Experience</h5>
              <small>Masters and 2 Years Internship</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon'/> 
              <h5>Something</h5>
              <small>Something text placeholder</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/> 
              <h5>Projects</h5>
              <small>Projects text placeholder</small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione possimus quas quod at laborum perferendis eum nulla soluta quae, odit amet odio, reiciendis ab, dolore quidem quis veritatis? Sint, aperiam.
          </p>

          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>

      </div>
    </section>
  )
}

export default about