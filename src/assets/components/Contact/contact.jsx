import React from 'react'
import Walmart from '../../../assets/walmart.png'
import Facebook from '../../../assets/facebook.png'
import Adobe from '../../../assets/adobe.png'
import Microsoft from '../../../assets/microsoft.png'
import './contact.css'

const Contact = () => {
  return (
    <div>
      <section className='contact'>
<div className='clients'>
    <span> My Clients</span>
    <p> I’m always looking for new opportunities to work on innovative and impactful design projects.</p>

<div className="iconimgs">
    <img src={Walmart} alt="" />
    <img src={Facebook} alt="" />
    <img src={Adobe} alt="" />
    <img src={Microsoft} alt="" />
</div>
</div>
<div className="contactme">
  <span style={{marginBottom:'10px'}}>Fill out the form below to get in touch with me</span>
  <form className="contact-form">
    <input type="text" placeholder="Your Name" className='inputf' /><br />
    <input type="email" placeholder="Your Email" className='inputf' /><br />
    <textarea placeholder="Your Message" className='inputf'></textarea><br />
    <button type="submit"n className='btn'>Send Message</button>
  </form>
</div>

      </section>
    </div>
  )
}

export default Contact;
