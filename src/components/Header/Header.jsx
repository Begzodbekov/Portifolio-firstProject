import React from 'react'
import './Header.scss'
import Logo from '../../img/header-logo.png'
function Header() {
  return (
    <div className='Header'>
      <div className="container">
        <div className="nav">
        
          <div className="nav_inner">
             <img src={Logo} alt="" />
             <ul className='nav_list'>
                <li>Home</li>
                <li>Courses</li>
                <li>Careers</li>
                <li>Blog</li>
                <li>About Us</li>
                <li><button className='nav_login'>Login</button></li>
                <li><button className='nav_sign'>Sign Up</button></li>
             </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header