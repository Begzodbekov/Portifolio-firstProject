import React, { useState } from 'react'
import './Header.scss'
import Logo from '../../img/header-logo.png'
import Dashboard from '../../img/courses-dashboard.png'
import { Link, useLocation } from 'react-router-dom'
import Blacklogo from '../../img/courses-logo.png'
function Header() {
  const location = useLocation().pathname
  console.log(location); 
  return (
    <div className={location == '/' ? 'Header' :'Headers'}>
      <div className="container">
        <div className={location === '/login' || location ==='/signup' ? "navs" :"nav"}>
          <div className="nav_inner">
             <img className={location == '/' ? 'img' :'imgs'} src={Logo} alt="" />
             <img className={location != '/' ? 'img' :'imgs'} src={Blacklogo} alt="" />
             <ul className='nav_list'>
                <li><Link className={location !='/' ?'nav-list-pages2' :'nav-list-pages' } to='/' >Home</Link></li>
                <li><Link className={location !='/' ?'nav-list-pages2' :'nav-list-pages' } to='/courses'>Courses</Link></li>
                <li><Link className={location !='/' ?'nav-list-pages2' :'nav-list-pages' } to='/careers'>Careers</Link></li>
                <li><Link className={location !='/' ?'nav-list-pages2' :'nav-list-pages' } to='/blog'>Blog</Link></li>
                <li><Link className={location !='/' ?'nav-list-pages2' :'nav-list-pages' } to='/about'>About us</Link></li>
                <li><button className={location != '/' ? 'nav_login2' :'nav_login'}><Link className='nav-list-login' to='/login'>Login</Link></button></li>
                <li><button className={location != '/'? 'nav_sign2' :'nav_sign'}><Link className='nav-list-sign' to='/signup'>Sign Up</Link></button></li>
             </ul>
             <div className={location != '/' ? 'header-profil':'header-profil2'}>
              <img src={Dashboard} alt="" />
              <select className='header-select' name="select" id="1">
                <option value="">Line</option>      
              </select>
             </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header