import React from 'react'
import './Courses.scss'
import Lessons from '../../components/Lessons/Lessons'
import Logo from '../../img/courses-logo.png'
import { Link } from 'react-router-dom'
import Dashboard from '../../img/courses-dashboard.png'

import Recommended from '../../components/Recommended/Recommended'

import Category from '../../components/Category/Category'
function Courses() {
  return (
    <div className='Courses'>
        <Lessons/>
        <Recommended/>
        <Category/>
    </div>
  )
}

export default Courses