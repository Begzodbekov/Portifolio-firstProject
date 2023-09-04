import React from 'react'
import './Lessons.scss'
import { lessond } from '../../lib/Lessond'
function Lessons() {
  return (
    <div className='Lessons'>
        <div className="container">
            <div className="lessons-inner">
                <div className='lessons-title'>
                    <h1>Welcome back, ready for your next lesson?</h1>
                    <p>View hisotry</p>
                </div>
                <ul className='lessons-lists'>
                  {
                    lessond?.map((item,index)=>(
                      <li key={index}>
                        <img src={item.img} alt="" />
                        <h2>{item.title}</h2>
                        <div>
                          <img src={item.human} alt="" />
                          <p>{item.name}</p>
                        </div>
                        <span></span>
                        <p>Lesson 5 of 7</p>
                      </li>
                    ))
                  }
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Lessons