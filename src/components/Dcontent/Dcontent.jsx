import React from 'react'
import './Dcontent.scss'
import dcontent from '../../img/dcontent__img.svg'


function Dcontent() {
  return (
    <div className='Dcontent'>
      <div className="container">
        <div className="dcontent__inner">
          <div className="dcontent-right">
            <ul className='dcontent__list'>
              <li className='dcontent__list-item'>
                Overview
              </li>
              <li className='dcontent__list-item'>
                Overview
              </li>
              <li className='dcontent__list-item'>
                Overview
              </li>
              <li className='dcontent__last-item'>
                Overview
              </li>
            </ul>
            <div className="dcontent__block">
              <div className="dcontent__stastic">
                <div className="dcontent__start">
                  <h1 className='dcontent__number'>4 out of 5</h1>
                  <img className='dcontent__img' src={dcontent} alt="" />
                  <p className='dcontent__text__1'>Top Raiting</p>
                </div>
                <div className='dcontent__left'>
                  <ul className="dcontent__stars">
                    <li>
                      5 Stars
                    </li>
                    <li>
                      4 Stars
                    </li>
                    <li>
                      3 Stars
                    </li>
                    <li>
                      2 Stars
                    </li>
                    <li>
                      1 Stars
                    </li>

                  </ul>
                  <div class="dcontent__progress">
                    <span className='dcontent__span'></span>
                  </div>
                  <div class="dcontent__progress">
                    <div class="progress-bar lessons-progress w-75" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                  <div class="dcontent__progress">
                    <div class="progress-bar lessons-progress w-75" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                  <div class="dcontent__progress">
                    <div class="progress-bar lessons-progress w-75" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                  <div class="dcontent__progress">
                    <div class="progress-bar lessons-progress w-75" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>

    </div>
  )
}

export default Dcontent