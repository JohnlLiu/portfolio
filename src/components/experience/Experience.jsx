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
          <div className={toggleState === 2 ? 'tabs active-tabs' : 'tabs'} onClick={() => toggleTab(2)}>Wyheng Technologies Ltd.</div>
          <div className={toggleState === 3 ? 'tabs active-tabs' : 'tabs'} onClick={() => toggleTab(3)}>The Woodbridge Group</div>
          <div className={toggleState === 4 ? 'tabs active-tabs' : 'tabs'} onClick={() => toggleTab(4)}>Nytric Ltd.</div>
          <div className={toggleState === 5 ? 'tabs active-tabs' : 'tabs'} onClick={() => toggleTab(5)}>HubHead</div>
          <div className={toggleState === 6 ? 'tabs active-tabs' : 'tabs'} onClick={() => toggleTab(6)}>Tyco Security Products</div>
          <div className={toggleState === 7 ? 'tabs active-tabs' : 'tabs'} onClick={() => toggleTab(7)}>Rheaume Engineering</div>
        </div>

        <div className='experience__contents'>

          {/*MIT-PITT-RW*/}
          <div className={toggleState === 1 ? 'content active-content' : 'content'}>
            <h2>Software Engineer</h2>
            <h4>Jul 2022 - Nov 2023</h4>
            <div className='experience__bullet'>
              <BiRightArrow className='bullet'/>
              <h3>Created an application using Python to generate vehicle race lines and velocity profiles for an autonomous racecar which enabled 
                self-driving attacking and defending maneuvers at 150mph+ for various Indy Autonomous Challenge (IAC) competitions</h3>
            </div>
            <div className='experience__bullet'>
              <BiRightArrow className='bullet'/>
              <h3>Designed data pipeline that allows for streamlined integration and use of large amounts of data for race line and velocity profile 
                generation and used Plotly to create an interactive graph UI for ease of use and visualization</h3>
            </div>
            <div className='experience__bullet'>
              <BiRightArrow className='bullet'/>
              <h3>Developed collision checking and path cost functions scripts in C++ as part of a vehicle path prediction controller resulting in better 
                autonomous pathing decisions</h3>
            </div>
          </div>

          {/*Wyheng Technologies Ltd.*/}
          <div className={toggleState === 2 ? 'content active-content' : 'content'}>
            <h2>Software Developer</h2>
            <h4>Sep 2020 - Aug 2021</h4>
            <div className='experience__bullet'>
              <BiRightArrow className='bullet'/>
              <h3>Developed scripts in Python to automate and streamline performance calculations of various oil and gas piping 
                equipment allowing for preliminary sizing calculation work to be done significantly faster</h3>
            </div>
            <div className='experience__bullet'>
              <BiRightArrow className='bullet'/>
              <h3>Used Pandas and openpyxl libraries to build a ETL pipeline of oil and gas production data resulting in more 
                organized databases that allowed for easier data analysis and use, leading to increased work productivity</h3>
            </div>
            <div className='experience__bullet'>
              <BiRightArrow className='bullet'/>
              <h3> Tested existing software for bugs and performance, fixing bugs and revamping code to increase performance speeds by up to an 
                additional 20%</h3>
            </div>
            <div className='experience__bullet'>
              <BiRightArrow className='bullet'/>
              <h3>Modified flare stack and flare knockout drum sizing spreadsheets based on API 521 </h3>
            </div>
          </div>

          {/*The Woodbridge Group*/}
          <div className={toggleState === 3 ? 'content active-content' : 'content'}>
            <h2>Mechanical Engineering</h2>
            <h4>Sep 2018 - Dec 2018</h4>
            <div className='experience__bullet'>
              <BiRightArrow className='bullet'/>
              <h3>Successfully led the conceptualization and construction of a pour head test system allowing for less downtime during routine 
                inspections resulting in significant cost savings of more than $50,000 per hour of plant line downtime</h3>
            </div>
            <div className='experience__bullet'>
              <BiRightArrow className='bullet'/>
              <h3>Refined and accelerated data management process using VBA to create an interactive spreadsheet used by company branches</h3>
            </div>
            <div className='experience__bullet'>
              <BiRightArrow className='bullet'/>
              <h3>Detailed P&ID design in AutoCAD and modeling in SOLIDWORKS of pour head assembly and components</h3>
            </div>
          </div>

          {/*Nytric Ltd.*/}
          <div className={toggleState === 4 ? 'content active-content' : 'content'}>
            <h2>Product Engineering</h2>
            <h4>Jan 2018 - Apr 2018</h4>
            <div className='experience__bullet'>
              <BiRightArrow className='bullet'/>
              <h3>Created simulation system allowing for detailed analysis of product performance and capabilities based on optics calculations</h3>
            </div>
            <div className='experience__bullet'>
              <BiRightArrow className='bullet'/>
              <h3>Used SolidWorks macros to automate some 3D CAD modelling allowing for quick revision design changes of touchscreen enclosures</h3>
            </div>
            <div className='experience__bullet'>
              <BiRightArrow className='bullet'/>
              <h3>Developed a script to streamline company design procedures by automating product and CAD model revision change records</h3>
            </div>
            <div className='experience__bullet'>
              <BiRightArrow className='bullet'/>
              <h3>Designed cost optimization script which realized the use of more cost-efficient components {'(>50% cheaper)'}</h3>
            </div>
          </div>

          {/*HubHead Corp.*/}
          <div className={toggleState === 5 ? 'content active-content' : 'content'}>
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
            <div className='experience__bullet'>
              <BiRightArrow className='bullet'/>
              <h3>Created scripts in VBA to automatically aggravate and organize client data to be used company asset management software</h3>
            </div>
          </div>

          {/*Tyco Security Products*/}
          <div className={toggleState === 6 ? 'content active-content' : 'content'}>
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

          {/*Rheaume Engineering*/}
          <div className={toggleState === 7 ? 'content active-content' : 'content'}>
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