import React from 'react'
import './Reading.scss'

function Reading() {
  return (
    <div className='Reading'>
      <div className="container">
        <h3 className='reading__tittle'>Reading blog list</h3>
        <ul className='reading__list'>
            <li className='reading__list__item'>
                <button className='ux__btn'>UX/UI</button>
            </li>
            <li className='reading__list__item1'>
                <button className='react__btn'>React</button>
            </li>
            <li className='reading__list__item2'>
                <button className='php__btn'>PHP</button>
            </li>
            <li className='reading__list__item3'>
                <button className='js__btn'>JavaScript</button>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Reading
