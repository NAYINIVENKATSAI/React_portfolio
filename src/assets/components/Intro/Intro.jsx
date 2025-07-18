import React from 'react'
import bg from '../../../assets/image.png'
import './Intro.css'
import { Link } from 'react-router'
import bthire from '../../../assets/hireme.png'

const Intro = () => {
  return (
    <div>
    <section className='main'>
        <div className="leftsec">
        <span>Hello,</span>
        <br />

        <span style={{fontSize:'1.5rem'
        }}> I'm <span style={{color:'yellow', fontWeight:'700'
      }}>Venkat Sai</span> </span><br />
        <span style={{fontSize:'2rem',
        fontWeight:'700'}}> Website Designer</span>
        <p>I am a skilled and passionate web designer  
            with experience <br />in creating visually appealling
            and user-friendly websites
        </p>
        <Link>
        <button className="hireme">
            <img src={bthire} alt="" />Hire me
        </button>
        </Link>
        </div>
        <div className='imgdiv'>
        <img src={bg} alt="backgound img" className=''/>
        </div>
        
    </section>
    </div>
  )
}

export default Intro;
