import React from 'react'
import './contact.css'
import Lottie from 'react-lottie';
import coffee from '../../assets/coffee.json'

const Contact = () => {

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: coffee,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>


      <div className='container contact__container'>

        

        <div className='contact__main'>
          <div className="me__lottie">
            <Lottie options={defaultOptions} alt='coffee'/>
          </div>
          <div className='contact__content'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum autem fugit est quam praesentium quas quia impedit, nemo cum asperiores. Fuga magni veritatis voluptatem similique modi. Id consequatur delectus incidunt!.</p>
            <div className='button__container'>
              <a href='mailto:something@gmail.com' className='btn btn-primary'>Send A Message</a>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Contact