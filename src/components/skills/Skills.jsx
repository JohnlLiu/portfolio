import React from 'react'
import './skills.css'
import {TbNorthStar} from 'react-icons/tb'

const Skills = () => {
  return (
    <section id='skills'>
        <h5>Things That I Am Good At</h5>
        <h2>My Skills</h2>

        <div className='container skills__container'>
            <div className='skills__languages'>
                <h3>Languages</h3>
                <div className='skills__content'>
                    <article className='skills__details'>
                        <TbNorthStar className='skills__bullet'/>
                        <div>
                            <h4>Python</h4>
                            <small className='text-light'>Experienced</small>
                        </div>
                    </article>
                    <article className='skills__details'>
                        <TbNorthStar className='skills__bullet'/>
                        <div>
                            <h4>C++</h4>
                            <small className='text-light'>Experienced</small>
                        </div>
                    </article>
                    <article className='skills__details'>
                        <TbNorthStar className='skills__bullet'/>
                        <div>
                            <h4>SQL</h4>
                            <small className='text-light'>Experienced</small>
                        </div>
                    </article>
                    <article className='skills__details'>
                        <TbNorthStar className='skills__bullet'/>
                        <div>
                            <h4>JavaScript</h4>
                            <small className='text-light'>Intermediate</small>
                        </div>
                    </article>
                    <article className='skills__details'>
                        <TbNorthStar className='skills__bullet'/>
                        <div>
                            <h4>TypeScript</h4>
                            <small className='text-light'>Intermediate</small>
                        </div>
                    </article>
                    <article className='skills__details'>
                        <TbNorthStar className='skills__bullet'/>
                        <div>
                            <h4>HTML</h4>
                            <small className='text-light'>Intermediate</small>
                        </div>
                    </article>
                    <article className='skills__details'>
                        <TbNorthStar className='skills__bullet'/>
                        <div>
                            <h4>CSS</h4>
                            <small className='text-light'>Intermediate</small>
                        </div>
                    </article>
                </div>
            </div>
            {/*END OF LANGUAGES PART*/}
            <div className='skills__tools'>
                <h3>Libraries and Tools</h3>
                <div className='skills__content'>
                    <article className='skills__details'>
                        <TbNorthStar className='skills__bullet'/>
                        <div>
                            <h4>PyTorch</h4>
                            <small className='text-light'>Experienced</small>
                        </div>
                    </article>
                    <article className='skills__details'>
                        <TbNorthStar className='skills__bullet'/>
                        <div>
                            <h4>TensorFlow</h4>
                            <small className='text-light'>Experienced</small>
                        </div>
                    </article>
                    <article className='skills__details'>
                        <TbNorthStar className='skills__bullet'/>
                        <div>
                            <h4>Scikit-Learn</h4>
                            <small className='text-light'>Experienced</small>
                        </div>
                    </article>
                    <article className='skills__details'>
                        <TbNorthStar className='skills__bullet'/>
                        <div>
                            <h4>React</h4>
                            <small className='text-light'>Intermediate</small>
                        </div>
                    </article>
                    <article className='skills__details'>
                        <TbNorthStar className='skills__bullet'/>
                        <div>
                            <h4>NumPy</h4>
                            <small className='text-light'>Experienced</small>
                        </div>
                    </article>
                    <article className='skills__details'>
                        <TbNorthStar className='skills__bullet'/>
                        <div>
                            <h4>Docker</h4>
                            <small className='text-light'>Intermediate</small>
                        </div>
                    </article>
                    <article className='skills__details'>
                        <TbNorthStar className='skills__bullet'/>
                        <div>
                            <h4>Git/GitHub</h4>
                            <small className='text-light'>Experienced</small>
                        </div>
                    </article>
                </div>
            </div>
            {/*END OF TOOLS PART*/}
            <div className='skills__applications'>
                <h3>Applications</h3>
                <div className='skills__content'>
                    <article className='skills__details'>
                        <TbNorthStar className='skills__bullet'/>
                        <div>
                            <h4>Data and Quantitative Analysis</h4>
                        </div>
                    </article>
                    <article className='skills__details'>
                        <TbNorthStar className='skills__bullet'/>
                        <div>
                            <h4>Supervised & Unsupervised Learning</h4>
                        </div>
                    </article>
                    <article className='skills__details'>
                        <TbNorthStar className='skills__bullet'/>
                        <div>
                            <h4>Reinforcement Learning</h4>
                        </div>
                    </article>
                    <article className='skills__details'>
                        <TbNorthStar className='skills__bullet'/>
                        <div>
                            <h4>Predicitive Analysis & Modelling</h4>
                        </div>
                    </article>
                    <article className='skills__details'>
                        <TbNorthStar className='skills__bullet'/>
                        <div>
                            <h4>Clustering and Classification</h4>
                        </div>
                    </article>
                </div>
            </div>

        </div>
    </section>
  )
}

export default Skills