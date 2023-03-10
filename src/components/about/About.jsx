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
              <small>Software Engineering with a focus in Machine Learning and AI</small>
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
            Hello! Welcome to my portfolio where you can find a showcase of the various projects and experiences I've done.
            I am a software engineer who is passionate about using my technical skills and knowledge to create impactful solutions 
            that can help solve real-world problems. I am always eager to learn about new technologies and stay updated with the latest advancements 
            in the world of machine learning and artificial intelligence.
          </p>

          <a href='#contact' className='btn btn-primary'>Know More</a>
        </div>

      </div>
    </section>
  )
}

export default about