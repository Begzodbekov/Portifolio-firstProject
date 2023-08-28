import React from 'react'
import './Hero.scss'
import Calendar from '../../img/hero-calendar.png'
import Class from '../../img/hero-men-class.png'
import Message from '../../img/hero-pochta.png'
import Voice from '../../img/hero-voice.png'
import Watch from '../../img/hero-watch.png'
import Background from '../../img/her-background.png'
function Hero() {
  return (
    <div className='Hero'>
        <div className="container">
          <div className="hero-innner">
           <img className='hero-backgroundimg' src={Background} alt="" />
              <div className='hero-left-inner'>
                   <h1><span>Studying</span> Online is now much easier</h1>
                   <p>TOTC is an interesting platform that will teach you in more an interactive way</p>
                <div className='hero-buttons'>
                  <button className='hero-join'>Join for free</button>
                  <a href="#"><img src={Watch} alt="" /></a>
                  <h3>Watch how it works</h3>
                </div>
              </div>
            
            
              <div className='hero-right-inner'>
                <div className='hero-right-items1'>
                  <div className="hero-assisted">
                    <img src={Calendar} alt="" />
                    <div>
                      <h3>250k</h3>
                      <p>Assisted Student</p>
                    </div>
                  </div>
                  <div className="hero-class">
                    <div className='hero-div'>
                      <img src={Class} alt="" />
                      <div>
                        <h2>User Experience Class</h2>
                        <p>Today at 12.00 PM</p>
                      </div>
                    </div>
                        <button className='hero-class-join'>Join Now</button>
                  </div>
                </div>
                <div className="hero-right-item2">
                  <img className='hero-voice' src={Voice} alt="" />
                  <div className="hero-congratulations">
                    <img src={Message} alt="" />
                    <div>
                      <h2>Congratulations</h2>
                      <p>Your admission completed</p>
                    </div>
                  </div>
                </div>
              </div>
            
          </div>
        </div>
    </div>
  )
}

export default Hero