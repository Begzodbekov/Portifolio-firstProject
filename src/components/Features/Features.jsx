import React from 'react'
import './Features.scss'
import featurebox from '../../img/featuresbox.svg'
import Ellipse1 from '../../img/Ellipse1.svg'
import Ellipse2 from '../../img/Ellipse2.svg'
import Ellipse3 from '../../img/Ellipse3.svg'
import FeaturesContwo from '../../img/FeaturesConTwo.svg'
function Features() {
  return (
    <div className='Features'>
      <div className="container">
        <div className="titles">
          <h1 className='feature__title'>
            < span style={{ color: "#2F327D" }}>
              Our
            </span>
            <span style={{ color: "#00CBB8" }}>
              Features
            </span>
          </h1>
          <p className='feature__p'>This very extraordinary feature, can make learning activities more efficient</p>
        </div>

        <div className="container__2">
          <img className='container__2__img__1' src={featurebox} alt="" />
          <div className="container__2__part__2">
          <h2 className='container__2__text__1'>
            <span className='two__text__1' style={{ color: "#2F327D" }}>
              A 
            </span>
            < span className='two__text__2' style={{ color: "#00CBB8" }}>
              user interface 
            </span>
            <span className='two__text__3' style={{ color: "#2F327D" }}>
              designed for the classroom
            </span>
          </h2>
          <nav className='container__2__elipse1'>
            <img className='Elipse__img1' src={Ellipse1} alt="" />
            <p className='Elipse1__text'>Teachers don’t get lost in the grid view and have a dedicated Podium space.</p>
          </nav>
          <nav className='container__2__elipse2'>
            <img  src={Ellipse2} alt="" />
            <p className='Elipse2__text'>TA’s and presenters can be moved to the front of the class.</p>
          </nav>
          <nav className='container__2__elipse__3'>
            <img src={Ellipse3} alt="" />
            <p className='Elipse3__text'>Teachers can easily see all students and class data at one time.</p>
          </nav>
          </div>
        </div>
        <div className="container__3">
        <div className="container__3__part__1">
          <h3 className='container__3__text__1'>
            <span className='text1__c3__t1' style={{color:'#00CBB8'}}>
            Tools
            </span>
            <span style={{color:'#2F327D'}}>
            For Teachers And Learners
            </span>
            </h3>
          <p className='container__3__text__2'>Class has a dynamic set of teaching tools built to be deployed and used during class. Teachers can handout assignments in real-time for students to complete and submit.</p>
          
        </div>
        <img className='container__3__img__1' src={FeaturesContwo} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Features