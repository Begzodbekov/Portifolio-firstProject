import React from 'react'
import './Header.scss'
import Logo from '../../img/header-logo.png'
import { Link } from 'react-router-dom'
function Header() {
  return (
    <div className='Header'>
      <div className="container">
        <div className="nav">
          <div className="nav_inner">
             <img src={Logo} alt="" />
             <ul className='nav_list'>
                <li><Link className='nav-list-pages' to='/' >Home</Link></li>
                <li><Link className='nav-list-pages' to='/courses'>Courses</Link></li>
                <li><Link className='nav-list-pages' to='/careers'>Careers</Link></li>
                <li><Link className='nav-list-pages' to='/blog'>Blog</Link></li>
                <li><Link className='nav-list-pages' to='/about'>About us</Link></li>
                <li><button className='nav_login'><Link className='nav-list-login' to='/login'>Login</Link></button></li>
                <li><button className='nav_sign'><Link className='nav-list-sign' to='/signup'>Sign Up</Link></button></li>
             </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header