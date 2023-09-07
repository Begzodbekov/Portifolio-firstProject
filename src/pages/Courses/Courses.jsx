import React from 'react'
import './Courses.scss'
import Lessons from '../../components/Lessons/Lessons'
import Recommended from '../../components/Recommended/Recommended'
import Category from '../../components/Category/Category'
import Choice from '../../components/Choice/Choice'
import Student from '../../components/Student/Student'
import Development from '../../components/Development/Development'
function Courses() {
  return (
    <div className='Courses'>
        <Lessons/>
        <Category/>
        <Recommended/>
        <Choice/>
        <Development/>
        <Student/>
    </div>
  )
}

export default Courses