import React from 'react'
import './Dcontent.scss'
import dcontent from '../../img/dcontent__img.svg'
import Odam from '../../img/courses-dashboard.png'
import Soat from '../../img/choice-clock.png'
import Konvert from '../../img/dcontent-rightimg.png'
import Money from '../../img/dcontent-money.png'
import Devices from '../../img/dcontent-devise.png'
import Certification from '../../img/dcontent-certification.png'
import Moduls from '../../img/dcontent-moduls.png'
import Twitter from '../../img/dcontent-twitter.png'
import Faceebook from '../../img/dcontent-facebook.png'
import Youtube from '../../img/dcontent-youtube.png'
import Instagram from '../../img/dcontent-instagram.png'
import Telegram from '../../img/dcontent-telegramm.png'
import Watsapp from '../../img/dcontent-watsapp.png'
function Dcontent() {
  return (
    <div className='Dcontent'>
      <div className="container">
        <div className="dcontent__inner">
          <div className="dcontent-left">
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
              <div className="dcontent__stastic">
                <div className='stastic_top'>
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
                    <div className="progressess">
                      <div class="progress dcontent-progress">
                        <div class="progress-bar dcontent-item_progress w-75" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <div class="progress dcontent-progress">
                        <div class="progress-bar dcontent-item_progress w-75" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <div class="progress dcontent-progress">
                        <div class="progress-bar dcontent-item_progress w-75" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <div class="progress dcontent-progress">
                        <div class="progress-bar dcontent-item_progress w-75" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <div class="progress dcontent-progress">
                        <div class="progress-bar dcontent-item_progress w-75" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                    </div>
                  </div>
                  </div>
                <div className="dcontent-stastic_item">
                  <div className='dcontent_teacher1'>
                    <img src={Odam} alt="" />
                    <div>
                      <h4>Lina</h4>
                      <img src={dcontent} alt="" />
                    </div>
                    <img className='dcontent_teacher-img1' src={Soat} alt="" />
                    <p className='dcontent-date'>3 Month</p>
                  </div>
                  <p className='dcontent-text'>Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...</p>
                  <span className='dcontent-linec'></span>
                  <div className='dcontent_teacher2'>
                    <img src={Odam} alt="" />
                      <h4 className='dcontent_name2'>Lina</h4>
                    <img src={Soat} alt="" />
                    <p className='dcontent-date2'>3 Month</p>
                  </div>
                  <p className='dcontent-text2'>Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...</p>
                </div>
              </div>
            </div>
            <div className="dcontent_right">
              <div className="dcontent_right_inner">
                <img src={Konvert} alt="" />
                <ul className='dcontent-narx'>
                  <li>$49.65</li>
                  <li>$99.99</li>
                  <li>50% Off</li>
                </ul>
                <h4 className='dcontent_right_h4'>11 hour left at this price</h4>
                <button className='dcontent_right_button'>Buy Now</button>
                <span className='dcontent_right_line'></span>
                <h1 className='dcontent_right_h1'>This Course included</h1>
                <ul className='dcontent_right_course'>
                  <li>
                    <img src={Money} alt="" />
                    Money Back Guarantee
                  </li>
                  <li>
                    <img src={Devices} alt="" />
                    Access on all devices
                  </li>
                  <li>
                    <img src={Certification} alt="" />
                    Certification of completion
                  </li>
                  <li>
                    <img src={Moduls} alt="" />
                    32 Moduls
                  </li>
                </ul>
                <span className='dcontent_right_line2'></span>
                <div className='dcontent_right_div'>
                  <h1>Training 5 or more people</h1>
                  <p>Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...</p>
                </div>
                <span className='dcontent_right_line3'></span>
                <h1 className='dcontent_right_h12'>Share this course</h1>
                <div className='dcontent-links'>
                  <img src={Twitter} alt="" />
                  <img src={Faceebook} alt="" />
                  <img src={Youtube} alt="" />
                  <img src={Instagram} alt="" />
                  <img src={Telegram} alt="" />
                  <img src={Watsapp} alt="" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

  )
}

export default Dcontent