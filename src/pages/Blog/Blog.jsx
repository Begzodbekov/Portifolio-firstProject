import React from 'react'
import './Blog.scss'
import Logo from '../../img/courses-logo.png'
import { Link } from 'react-router-dom'
import Dashboard from '../../img/courses-dashboard.png'
import BlogUI from '../../components/BlogUI/BlogUI'
function Blog() {
  return (
    <div className='Blog'>
        <div className="blog-nav">
          <div className="blog-nav_inner">
             <img src={Logo} alt="" />
             <ul className='blog-nav_list'>
                <li><Link className='blog-nav-list-pages' to='/' >Home</Link></li>
                <li><Link className='blog-nav-list-pages' to='/courses'>Courses</Link></li>
                <li><Link className='blog-nav-list-pages' to='/careers'>Careers</Link></li>
                <li><Link className='blog-nav-list-pages' to='/blog'>Blog</Link></li>
                <li><Link className='blog-nav-list-pages' to='/about'>About us</Link></li>
             </ul>
             <div className='blog-profil'>
              <img src={Dashboard} alt="" />
              <select className='blog-select' name="select" id="1">
                <option value="">Line</option>
              </select>
             </div>
          </div>
        </div>

        <BlogUI/>
        
    </div>

)
}

export default Blog