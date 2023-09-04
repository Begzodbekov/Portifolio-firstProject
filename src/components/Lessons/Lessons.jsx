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
                      <li className='lessons-items' key={index}>
                        <img className='lessons-items_img' src={item.img} alt="" />
                        <h2>{item.title}</h2>
                        <div className='lessons-div'>
                          <img src={item.human} alt="" />
                          <p>{item.name}</p>
                        </div>
                        <div class="progress">
                          <div class="progress-bar lessons-progress w-75" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        {/* <span className='lesson-item-line'></span> */}
                        <p className='lessons-list_p'>Lesson 5 of 7</p>
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