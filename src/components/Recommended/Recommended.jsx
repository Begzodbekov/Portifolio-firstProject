import React from 'react'
import { Link } from 'react-router-dom'
import './Recommended.scss'

function Recommended() {
  return (
    <div className="recommended">
        <div className="recommended__body">
            <div className="recommended__titles">
                <h5 className='rec__title1'>Recommended for you</h5>
                <Link className='rec__link1'>See all</Link>
            </div>
        </div>
    </div>
  )
}

export default Recommended