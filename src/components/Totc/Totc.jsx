import React from 'react'
import './Totc.scss'
import circle1 from '../../img/circe1.svg'
import { Link } from 'react-router-dom'
import parttwo1 from '../../img/parttwo1.png'
function Totc() {
  return (
    <div className='Totc'>
      <div className="container">
        <div className="container__head">
          <h1 className='head__title'>
            < span style={{ color: "#2F327D" }}>
              What is
            </span>
            <span style={{ color: "#00CBB8" }}>
              TOTC?
            </span>

          </h1>
          <p className='head__p'>TOTC is a platform that allows educators to create online classes whereby they can store the course materials online; manage assignments, quizzes and exams; monitor due dates; grade results and provide students with feedback all in one place.</p>
          <div className="card__container">
            <div className="card1">
              <h2>
                FOR INSTRUCTORS
              </h2>
              <button className='card1__btn'>
                Start a class today
              </button>
            </div>
            <div className="card2">
              <h2>
                FOR STUDENTS
              </h2>
              <button className='card2__btn'>
                Enter access code
              </button>
            </div>
          </div>
        </div>

        <div className="container__body">
          <div className="part1">
            <nav className='part1__circle1'>
              <img src={circle1} alt="" />
            </nav>
            <h3 className='part1__title'>
              <span style={{ color: "#2F327D" }}>
                Everything you can do in a physical classroom,
              </span>
              <span style={{ color: "#00CBB8" }}>
                you can do with TOTC
              </span>
            </h3>
            <p className='part1__p'>TOTC’s school management software helps traditional and online schools manage scheduling, attendance, payments and virtual classrooms all in one secure cloud-based system.</p>
            <Link className='part1__link'>Learn more</Link>
          </div>
          <div className="part2">
            <div className="box1">
            </div>
            <div className="box2">
            </div>
            <img src={parttwo1} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Totc