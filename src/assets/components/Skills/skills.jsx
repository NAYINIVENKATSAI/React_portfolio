import React from 'react'
import './skills.css'
import uidesign from '../../../assets/ui-design.png'
import website from '../../../assets/website-design.png'
import appdesign from '../../../assets/app-design.png'

const Skills = () => {
    return (
        <div>
            <section className='about'>
                <span className="heading">
                    What I do <br />
                </span>
                <span className="descritption">
                   I am a skilled and passionate web designer with experience in creating visually.I specialize in turning
                </span> <br />

                <span className="descr2">
                     Ideas into digital experiences through clean design, modern UI/UX principles, and pixel-perfect implementation
                </span>
                <div className="aboutimg">
                    <div className="uiux">
                        <img src={uidesign} alt="" />
                        <p>Passionate UI/UX designer focused on crafting intuitive, user-centered digital experiences.</p>
                    </div>
                    <div className="website">
                        <img src={website} alt="" />
                        <p>Creative web designer skilled in building responsive, visually engaging, and user-friendly websites.</p>
                    </div>
                    <div className="appdesign">
                        <img src={appdesign} alt="" />
                        <p>Innovative app designer focused on creating sleek, intuitive, and user-centric mobile interfaces.</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Skills;
