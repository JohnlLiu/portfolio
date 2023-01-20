import React from 'react'
import './about.css'
import Lottie from 'react-lottie';
import ME from '../../assets/coding.json'
import {FaAward} from 'react-icons/fa'
import {HiOutlineChip} from 'react-icons/hi'
import {RiPlantLine} from 'react-icons/ri'

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
              <h5>What I Do</h5>
              <small>Software Engineering with a focus in Machine Learning</small>
            </article>

            <article className='about__card'>
              <HiOutlineChip className='about__icon'/> 
              <h5>My Interests</h5>
              <small>All things tech and automation</small>
            </article>

            <article className='about__card'>
              <RiPlantLine className='about__icon'/> 
              <h5>Things I Enjoy</h5>
              <small>Food, playing sports, video games, music, and sleep</small>
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