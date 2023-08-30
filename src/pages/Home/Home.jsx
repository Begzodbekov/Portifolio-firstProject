import React from 'react'
import Header from '../../components/Header/Header'
import Hero from '../../components/Hero/Hero'
import Success from '../../components/Success/Success'
import Cloud from '../../components/Cloud/Cloud'
import Totc from '../../components/Totc/Totc'
import Features from '../../components/Features/Features'
import Sefeatures from '../../components/Sefeatures/Sefeatures'
import Testimonial from '../../components/Testimonial/Testimonial'
import News from '../../components/News/News'
import Course from '../../components/Courses/Courses'

function Home() {
  return (
    <div className='Home'>
        <Header/>
        <Hero/>
        <Success/>  
        <Cloud/>
        <Totc/>
        <Features/>
        <Sefeatures/>
        <Course/>
        <Testimonial/>
        <News/>
    </div>
  )
}

export default Home