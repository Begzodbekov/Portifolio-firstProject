import React from 'react'
import './Education.scss'
function Education() {
  return (
    <div className='Education'>
      <div className="container">
      <div className="education-inner">
        <div className="education-top">
       <h2 className='education__tittle'>Top  Education offers and deals are listed here</h2>
       <p className='see__all'>See all</p>
        </div>
      <div className="education-item">
      <div className="first-item">
        <span>50%</span>
        <h3 className='small__tittle'>FOR INSTRUCTORS</h3>
        <p className='education__info'>TOTC’s school management <br /> software helps traditional and <br /> online schools manage <br />  scheduling,</p>
      </div>
      <div className="second-item">
      <span>50%</span>
        <h3 className='small__tittle'>FOR INSTRUCTORS</h3>
        <p className='education__info'>TOTC’s school management <br /> software helps traditional and <br /> online schools manage <br />  scheduling,</p>
      </div>
      <div className="third-item">
      <span>50%</span>
        <h3 className='small__tittle'>FOR INSTRUCTORS</h3>
        <p className='education__info'>TOTC’s school management <br /> software helps traditional and <br /> online schools manage <br />  scheduling,</p>
      </div>
      </div>
      </div>
      </div>
    </div>
  )
}
 
export default Education
