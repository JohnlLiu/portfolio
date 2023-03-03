import React from 'react'
import './skills.css'
import {TbNorthStar} from 'react-icons/tb'

const Skills = () => {
  return (
    <section id='skills'>
        <h5>What I'm Good At</h5>
        <h2>My Skills</h2>

        <div className='container skills__container'>
            <article className='skills__item'>
                <h3>Languages</h3>
                <div className='skills__content'>
                    <article className='skills__details'>
                        <TbNorthStar className='skills__bullet'/>
                        <h4>Python</h4>
                    </article>
                    <article className='skills__details'>
                        <TbNorthStar className='skills__bullet'/>
                        <h4>C++</h4>
                    </article>
                    <article className='skills__details'>
                        <TbNorthStar className='skills__bullet'/>
                        <h4>SQL</h4>
                    </article>
                    <article className='skills__details'>
                        <TbNorthStar className='skills__bullet'/>
                        <h4>MATLAB</h4>
                    </article>
                    <article className='skills__details'>
                        <TbNorthStar className='skills__bullet'/>
                        <h4>JavaScript</h4>
                    </article>
                    <article className='skills__details'>
                        <TbNorthStar className='skills__bullet'/>
                        <h4>TypeScript</h4>
                    </article>
                    <article className='skills__details'>
                        <TbNorthStar className='skills__bullet'/>
                        <h4>HTML</h4>
                    </article>
                    <article className='skills__details'>
                        <TbNorthStar className='skills__bullet'/>
                        <h4>CSS</h4>
                    </article>
                </div>
            </article>
            {/*END OF LANGUAGES PART*/}
            <article className='skills__item'>
                <h3>Libraries and Tools</h3>
                <div className='skills__content'>
                    <article className='skills__details'>
                        <TbNorthStar className='skills__bullet'/>
                        <h4>PyTorch</h4>
                    </article>
                    <article className='skills__details'>
                        <TbNorthStar className='skills__bullet'/>
                        <h4>TensorFlow</h4>
                    </article>
                    <article className='skills__details'>
                        <TbNorthStar className='skills__bullet'/>
                        <h4>Keras</h4>
                    </article>
                    <article className='skills__details'>
                        <TbNorthStar className='skills__bullet'/>
                        <h4>Scikit-Learn</h4>
                    </article>
                    <article className='skills__details'>
                        <TbNorthStar className='skills__bullet'/>
                        <h4>React</h4>
                    </article>
                    <article className='skills__details'>
                        <TbNorthStar className='skills__bullet'/>
                        <h4>AWS</h4>
                    </article>
                    <article className='skills__details'>
                        <TbNorthStar className='skills__bullet'/>
                        <h4>NumPy</h4>
                    </article>
                    <article className='skills__details'>
                        <TbNorthStar className='skills__bullet'/>
                        <h4>Docker</h4>
                    </article>
                    <article className='skills__details'>
                        <TbNorthStar className='skills__bullet'/>
                        <h4>Git/GitHub</h4>
                    </article>
                </div>
            </article>
            {/*END OF TOOLS PART*/}
            <article className='skills__item'>
                <h3>Machine Learning</h3>
                <div className='skills__content'>
                    <article className='skills__details'>
                        <TbNorthStar className='skills__bullet'/>
                        <h4>Data and Quantitative Analysis</h4>
                    </article>
                    <article className='skills__details'>
                        <TbNorthStar className='skills__bullet'/>
                        <h4>Supervised & Unsupervised Learning</h4>
                    </article>
                    <article className='skills__details'>
                        <TbNorthStar className='skills__bullet'/>
                        <h4>Reinforcement Learning</h4>
                    </article>
                    <article className='skills__details'>
                        <TbNorthStar className='skills__bullet'/>
                        <h4>Deep Learning</h4>
                    </article>
                    <article className='skills__details'>
                        <TbNorthStar className='skills__bullet'/>
                        <h4>Predicitive Analysis & Modelling</h4>
                    </article>
                    <article className='skills__details'>
                        <TbNorthStar className='skills__bullet'/>
                        <h4>Clustering and Classification</h4>
                    </article>
                    <article className='skills__details'>
                        <TbNorthStar className='skills__bullet'/>
                        <h4>NLP</h4>
                    </article>
                </div>
            </article>

        </div>
    </section>
  )
}

export default Skills