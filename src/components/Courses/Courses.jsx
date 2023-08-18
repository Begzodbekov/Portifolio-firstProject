import React from 'react'
import './Course.scss'
import img from '../../img/Detail.png'
function Courses() {
  return (
    <div className='Courses'>
        <div className="alls"> 
         <div className="title">
          <h2>Explore Course</h2>
          <p>Ut sed eros finibus, placerat orci id, dapibus.</p>
         </div>
         <div className="box1">
            <div className="box_title">
            <i class="bi bi-palette-fill"></i>
            <p>Lorem, ipsum.</p>
            </div>
            <div className="menu">
               
            </div>
         </div>
         <div className="box2">
         <div className="box_title">
         <i class="bi bi-globe-americas"></i>
            <p>Quisque a Consequat</p>
            </div>
            <div className="menu">
               
            </div>
         </div>
         <div className="box3">
         <div className="box_title">
         <i class="bi bi-clipboard"></i>
            <p>Quisque a Consequat</p>
            </div>
            <div className="menu">
               
            </div>
         </div>
        </div>
    </div>
  )
}

export default Courses