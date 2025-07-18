import React from 'react'
import './works.css'
import port1 from '../../../assets/portfolio-1.png'
import port2 from '../../../assets/portfolio-2.png'
import port3 from '../../../assets/portfolio-3.png'
import port4 from '../../../assets/portfolio-4.png'
import port5 from '../../../assets/portfolio-5.png'
import port6 from '../../../assets/portfolio-6.png'


const Works = () => {
  return (
    <div>
      <section className='work'>
    <span className='head'> My Portfolio</span>
    <p>I’m a passionate UI/UX and web designer specializing in responsive websites and modern app interfaces. <br />
I create visually appealing, user-friendly designs that deliver seamless digital experiences. </p>

<div className="workimgs">
    <img src={port1} alt="" />
    <img src={port2} alt="" />
    <img src={port3} alt="" />
    <img src={port4} alt="" />
    <img src={port5} alt="" />
    <img src={port6} alt="" />
</div>
<button style={{marginLeft:'800px', padding:'10px',borderRadius:'20px',
    marginTop:'18px', cursor:'pointer',margin:'3rem'
}}>See more</button>
      </section>
      
    </div>
  )
}

export default Works
