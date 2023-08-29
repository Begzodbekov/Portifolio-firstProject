import React from 'react'
import './Success.scss'
import Students from '../../img/success-15K+.png'
import Total from '../../img/success-75 %.png'
import Questions from '../../img/success-35.png'
import Experts from '../../img/success-26.png'
import Experiences from '../../img/success-16.png'
function Success() {
  return (
    <div className='Success'>
      <div className="container">
        <div className="success-inner">
          <h1>Our Success</h1>
          <p className='success-description'>Ornare id fames interdum porttitor nulla turpis etiam. Diam vitae sollicitudin at nec nam et pharetra gravida. Adipiscing a quis ultrices eu ornare tristique vel nisl orci.</p>
          <div className='success-list'>
            <div>
              <img src={Students} alt="" />
              <p>Students</p>
            </div>
            <div>
              <img src={Total} alt="" />
              <p>Total success</p>
            </div>
            <div>
              <img src={Questions} alt="" />
              <p>Main questions</p>
            </div>
            <div>
              <img src={Experts} alt="" />
              <p>Chief experts</p>
            </div>
            <div>
              <img src={Experiences} alt="" />
              <p>Years of experience</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Success