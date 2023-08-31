import React from 'react'
import './Headerp.scss'
import Logo from '../../img/courses-logo.png'
import { Link } from 'react-router-dom'
import Dashboard from '../../img/courses-dashboard.png'
function Headerp() {
  return (
    <div className='Headerp'>
          <div className="headerp-nav">
          <div className="headerp-nav_inner">
             <img src={Logo} alt="" />
             <ul className='headerp-nav_list'>
                <li><Link className='headerp-nav-list-pages' to='/' >Home</Link></li>
                <li><Link className='headerp-nav-list-pages' to='/courses'>Courses</Link></li>
                <li><Link className='headerp-nav-list-pages' to='/careers'>Careers</Link></li>
                <li><Link className='headerp-nav-list-pages' to='/blog'>Blog</Link></li>
                <li><Link className='headerp-nav-list-pages' to='/about'>About us</Link></li>
             </ul>
             <div className='headerp-profil'>
              <img src={Dashboard} alt="" />
              <select className='headerp-select' name="select" id="1">
                <option value="">Line</option>      
              </select>
             </div>
          </div>
        </div>
    </div>
  )
}

export default Headerp