import React from 'react'
import './Footer.scss'
import footer from '../../img/Group 111.png'


function Footer() {
  return (
  
    <div className='footer'>
      <div className="abd">
        <img className='footer_img' src={footer} alt="" />
      <h5 className='footer__tittle'>Virtual Class <br />   for Zoom</h5>
      <p className='footer__p'>Subscribe to get our Newsletter</p>
      <input className='footer__inp' type="text" placeholder='Your Email' />
      <button className='footer__btn'>Subscribe</button>
      <p className='footer__p__bottom'>Careers Privacy Policy Terms&Conditions</p>
      <p className='date__p'>© 2021 Class Technologies Inc. </p>
      </div>
    </div>
  )
}

export default Footer