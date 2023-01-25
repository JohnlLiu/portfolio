import React from 'react'
import './projects.css'
import {FiFolder} from 'react-icons/fi'
import {FiGithub} from 'react-icons/fi'
import {RxOpenInNewWindow} from 'react-icons/rx'
import {BsGlobe2} from 'react-icons/bs'

const Projects = () => {
  return (
    <section id='projects'>
      <h5>Stuff I Made</h5>
      <h2>Projects</h2>

      <div className='container projects__container'>

        <article className='projects__item'>
            <div className='projects__item-cta'>
              <FiFolder className='projects__icon'/>
              <div className='projects__links'>
                <a href='http://driverless.mit.edu/mitpittrw' target="_blank" rel="noopener noreferrer"><BsGlobe2/></a>
                <a href='https://medium.com/@j0hn.l/betty-autonomous-indy-race-car-1002f88faafb' target="_blank" rel="noopener noreferrer"><RxOpenInNewWindow/></a>
              </div>
            </div>
            <h3>Betty {'(MIT-PITT-RW)'}</h3>
            <h5>
              Get to know Betty, one of the worlds fastest autonmous racecars capabable of reaching speeds of 150mph+ and competed in various
              challenges hosted by the Indy Autonomous Challenge {'(IAC)'}
            </h5>
            <h4>Plotly Pandas ROS SciPy</h4>
        </article>

        <article className='projects__item'>
            <div className='projects__item-cta'>
              <FiFolder className='projects__icon'/>
              <div className='projects__links'>
                <a href='https://github.com/JohnlLiu/Slime-Simulation' target="_blank" rel="noopener noreferrer"><FiGithub/></a>
                <a href='https://medium.com/@j0hn.l/slime-simulation-f92c1ecfe3a7' target="_blank" rel="noopener noreferrer"><RxOpenInNewWindow/></a>
              </div>
            </div>
            <h3>Slime Simulation</h3>
            <h5>
              Explore the unique world of slime. This project aims to explore and simulate on how a set of simple rules can lead to complex and organic
              behavior of a swarm of agents. Watch the visualuation and evolution of how thousands of agents assemble together to create unique transport
              channel network patterns
            </h5>
            <h4>Python NumPy SciPy Pillow</h4>
        </article>

        <article className='projects__item'>
            <div className='projects__item-cta'>
              <FiFolder className='projects__icon'/>
              <div className='projects__links'>
                <a href='https://github.com/JohnlLiu/Projects' target="_blank" rel="noopener noreferrer"><FiGithub/></a>
                <a href='https://medium.com/@j0hn.l' target="_blank" rel="noopener noreferrer"><RxOpenInNewWindow/></a>
              </div>
            </div>
            <h3>Sentiment Analysis on Movie Reviews</h3>
            <h5>
              Is this movie worth watching? This program is able to tell you. Using the IMDb movie review data set, a nerual network is 
              developed to perform sentinence analysis on various movie reviews to tell you if its a positive or negative review.
            </h5>
            <h4>Pytorch Scikit-learn Pandas NumPy</h4>
        </article>

        <article className='projects__item'>
            <div className='projects__item-cta'>
              <FiFolder className='projects__icon'/>
              <div className='projects__links'>
                <a href='https://medium.com/@j0hn.l' target="_blank" rel="noopener noreferrer"><RxOpenInNewWindow/></a>
              </div>
            </div>
            <h3>Aerial Manipulator</h3>
            <h5>
              The future of warehouse management. This project was to create an autonomous drone with a manipulator arm attachment that would fly
              around warehouses to move and organise various items.
            </h5>
            <h4>MATLAB Simulink OpenCV Arduino</h4>
        </article>

        <article className='projects__item'>
            <div className='projects__item-cta'>
              <FiFolder className='projects__icon'/>
              <div className='projects__links'>
                <a href='https://github.com/JohnlLiu/CNC' target="_blank" rel="noopener noreferrer"><FiGithub/></a>
                <a href='https://medium.com/@j0hn.l' target="_blank" rel="noopener noreferrer"><RxOpenInNewWindow/></a>
              </div>
            </div>
            <h3>CNC Plotter</h3>
            <h5>
              Fun printer project. Using 2 stepper motors to control timing belts arranged in Core-XY formation,
              load in any image and watch the plotter move and draw the image on the platform. 
            </h5>
            <h4>Solidworks Arduino 3D-Printing GRBL</h4>
        </article>

        

      </div>

    </section>
  )
}

export default Projects