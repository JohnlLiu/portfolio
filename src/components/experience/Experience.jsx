import React from 'react'
import {useState} from 'react'
import './experience.css'
import {BiRightArrow} from 'react-icons/bi'

const Experience = () => {

  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  }

  return (
    <section id='experience'>
      <h5>Where I've Worked</h5>
      <h2>Experiences</h2>

      <div className='container experience__container'>

        <div className='experience__tabs'>
          <div className={toggleState === 1 ? 'tabs active-tabs' : 'tabs'} onClick={() => toggleTab(1)}>MIT-PITT-RW</div>
          <div className={toggleState === 2 ? 'tabs active-tabs' : 'tabs'} onClick={() => toggleTab(2)}>The Woodbridge Group</div>
          <div className={toggleState === 3 ? 'tabs active-tabs' : 'tabs'} onClick={() => toggleTab(3)}>Nytric Ltd.</div>
          <div className={toggleState === 4 ? 'tabs active-tabs' : 'tabs'} onClick={() => toggleTab(4)}>HubHead</div>
          <div className={toggleState === 5 ? 'tabs active-tabs' : 'tabs'} onClick={() => toggleTab(5)}>Tyco Security Products</div>
          <div className={toggleState === 6 ? 'tabs active-tabs' : 'tabs'} onClick={() => toggleTab(6)}>Rheaume Engineering</div>
        </div>

        <div className='experience__contents'>

          <div className={toggleState === 1 ? 'content active-content' : 'content'}>
            <h2>Software Engineer</h2>
            <h4>July 2022 - Present</h4>
            <div className='experience__bullet'>
              <BiRightArrow className='bullet'/>
              <h3>Wrote and tested software for an autonomous racecar capable of reaching speeds of 150mph+ for the Indy Autonomous Challenge</h3>
            </div>
            <div className='experience__bullet'>
              <BiRightArrow className='bullet'/>
              <h3>Generated vehicle pathing using cubic spline models allowing for safe attacking and defending maneuvers of the vehicle which enabled 
                  autonomous vehicle passing at 150mph at the Las Vegas Motor Speedway competition</h3>
            </div>
            <div className='experience__bullet'>
              <BiRightArrow className='bullet'/>
              <h3>Optimized racing lines for shortest distance and minimum lap times taking in account of vehicle dynamics and environmental factors to 
                  ensure ideal maneuvering around the racetrack</h3>
            </div>
          </div>

          <div className={toggleState === 2 ? 'content active-content' : 'content'}>
            <h2>Mechanical Engineering</h2>
            <h4>Sep 2018 - Dec 2018</h4>
            <div className='experience__bullet'>
              <BiRightArrow className='bullet'/>
              <h3>Led the concept generation and prototype build of a pour head test system allowing for less downtime during routine inspections 
                  resulting in significant cost savings {'(>$50,000 per hour of downtime)'} </h3>
            </div>
            <div className='experience__bullet'>
              <BiRightArrow className='bullet'/>
              <h3>Detailed P&ID design in AutoCAD and modeling in SOLIDWORKS of pour head assembly and components</h3>
            </div>
          </div>

          <div className={toggleState === 3 ? 'content active-content' : 'content'}>
            <h2>Product Development Engineering</h2>
            <h4>Jan 2018 - Apr 2018</h4>
            <div className='experience__bullet'>
              <BiRightArrow className='bullet'/>
              <h3>Created simulation system allowing for detailed analysis of product performance and capabilities based on optics calculations</h3>
            </div>
            <div className='experience__bullet'>
              <BiRightArrow className='bullet'/>
              <h3>3D CAD modelling of touchscreen enclosures for injection molding with focus on DFM and DFA</h3>
            </div>
            <div className='experience__bullet'>
              <BiRightArrow className='bullet'/>
              <h3>Developed a script to streamline company design procedures by automating product and CAD model revision changes</h3>
            </div>
            <div className='experience__bullet'>
              <BiRightArrow className='bullet'/>
              <h3>Designed cost optimization script which realized the use of more cost-efficient components {'(>50% cheaper)'}</h3>
            </div>
          </div>

          <div className={toggleState === 4 ? 'content active-content' : 'content'}>
            <h2>Systems Engineering</h2>
            <h4>May 2017 - Aug 2017</h4>  
            <div className='experience__bullet'>
              <BiRightArrow className='bullet'/>
              <h3>Created enterprise asset management demos in order to optimize management procedures for clients</h3>
            </div>
            <div className='experience__bullet'>
              <BiRightArrow className='bullet'/>
              <h3>Consulted with various clients to find data management solutions and deliver  the most optimal management strategies</h3>
            </div>
          </div>

          <div className={toggleState === 5 ? 'content active-content' : 'content'}>
            <h2>Mechanical Designer</h2>
            <h4>Aug 2016 - Dec 2016</h4>  
            <div className='experience__bullet'>
              <BiRightArrow className='bullet'/>
              <h3>Performed detailed CAD design in Creo and 3D printing prototyping of product components to test for tolerances, quality, and capabilities</h3>
            </div>
            <div className='experience__bullet'>
              <BiRightArrow className='bullet'/>
              <h3>Applied principle of first run measurements and quality control analysis to control and monitor product performance and manufacturing process</h3>
            </div>
          </div>

          <div className={toggleState === 6 ? 'content active-content' : 'content'}>
            <h2>Technical Support</h2>
            <h4>Feb 2016 - Apr 2016</h4>  
            <div className='experience__bullet'>
              <BiRightArrow className='bullet'/>
              <h3>Streamline and optimization of process calculations for various piping equipment</h3>
            </div>
            <div className='experience__bullet'>
              <BiRightArrow className='bullet'/>
              <h3>Analysis and application of oil and gas processing including design and 
                optimization of process flow calculators as well as PFD's and P&ID's interpretation</h3>
            </div>
          </div>
        </div>

      </div>

    </section>
  )
}

export default Experience