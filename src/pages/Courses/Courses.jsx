import React from 'react'
import './Courses.scss'
import Lessons from '../../components/Lessons/Lessons'
import Logo from '../../img/courses-logo.png'
import { Link } from 'react-router-dom'
import Dashboard from '../../img/courses-dashboard.png'
function Courses() {
  return (
    <div className='Courses'>
      <div className="course-nav">
          <div className="course-nav_inner">
             <img src={Logo} alt="" />
             <ul className='course-nav_list'>
                <li><Link className='course-nav-list-pages' to='/' >Home</Link></li>
                <li><Link className='course-nav-list-pages' to='/courses'>Courses</Link></li>
                <li><Link className='course-nav-list-pages' to='/careers'>Careers</Link></li>
                <li><Link className='course-nav-list-pages' to='/blog'>Blog</Link></li>
                <li><Link className='course-nav-list-pages' to='/about'>About us</Link></li>
             </ul>
             <div className='courses-profil'>
              <img src={Dashboard} alt="" />
              <select className='courses-select' name="select" id="1">
                <option value="">Line</option>
              </select>
             </div>
          </div>
        </div>
        <Lessons/>
    </div>
  )
}

export default Courses