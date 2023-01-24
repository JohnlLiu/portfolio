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
          <div className="coffee__lottie">
            <Lottie options={defaultOptions} alt='coffee'/>
          </div>
          <div className='contact__content'>
            <p>Want to know more or have any questions? I am open to any inquires, so if there is something you want to
              ask or just want to say hi, feel free to send me a message and we can have a chat over some virtual coffee. </p>
            <div className='button__container'>
              <a href='mailto:liuyuhengs@gmail.com' className='btn btn-primary'>Send A Message</a>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Contact