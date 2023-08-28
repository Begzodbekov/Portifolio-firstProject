import React from 'react'
import './Course.scss'
import { data } from '../../lib/Data'
import { data2 } from '../../lib/Data2'
import { data3 } from '../../lib/Data3'


function Course() {

   return (
      <div className='course '>
         <div className="container">
            <div className="course__top">
               <h2>
                  Explore Course
               </h2>
               <p>
                  Ut sed eros finibus, placerat orci id, dapibus.
               </p>
            </div>
            <div className="couse__bottom">
               <div className="bottom__icons">
                  <span className='icons1'>
                     <i className="bi bi-palette one"></i>
                     <p>Lorem Ipsum</p>
                  </span>
                  <span className='icons2'>
                     See all
                     <i className="bi bi-arrow-right-short two"></i>
                  </span>
               </div>
               <ul className='course__list'>
                  {
                     data.map((item, index) => (

                        <li className='course__item' key={index}>
                           <p className='course__title' style={{ background: item.color }}>{item.name}</p>
                           <div className='course__inner'>
                              <img src={item.img} alt="" />
                              <div>
                                 <h2>
                                    Lorem ipsum dolor sit amet consectetur.
                                 </h2>
                                 <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique blanditiis nesciunt consectetur doloribus.
                                 </p>

                                 <span>$ {item.space}</span>
                                 <br />
                                 <button>EXPLORE</button>
                              </div>
                           </div>
                        </li>

                     ))
                  }

               </ul>
               <div className="bottom__icons">
                  <span className='icons1'>
                     <i className="bi bi-palette one"></i>
                     <p>Lorem Ipsum</p>
                  </span>
                  <span className='icons2'>
                     See all
                     <i className="bi bi-arrow-right-short two"></i>
                  </span>
               </div>
               <ul className='course__list'>
                  {
                     data2.map((item2, index2) => (
                        <li className='course__item' key={index2}>
                           <p className='course__title' style={{
                              background:
                                 item2.color
                           }}>{item2.name}</p>
                           <div className='course__inner'>
                              <img src={item2.img} alt="" />
                              <div>
                                 <h2>
                                    Lorem ipsum dolor sit amet consectetur.
                                 </h2>
                                 <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique blanditiis nesciunt consectetur doloribus.
                                 </p>

                                 <span>$ {item2.space}</span>
                                 <br />
                                 <button>EXPLORE</button>
                              </div>
                           </div>
                        </li>
                     ))
                  }
               </ul>
               <div className="bottom__icons">
                  <span className='icons1'>
                     <i className="bi bi-palette one"></i>
                     <p>Lorem Ipsum</p>
                  </span>
                  <span className='icons2'>
                     See all
                     <i className="bi bi-arrow-right-short two"></i>
                  </span>
               </div>
               <ul className='course__list'>
                  {
                     data3.map((item3, index3) => (
                        <li className='course__item' key={index3}>
                           <p className='course__title' style={{ background: item3.color }}>{item3.name}</p>
                           <div className='course__inner'>
                              <img src={item3.img} alt="" />
                              <div>
                                 <h2>
                                    Lorem ipsum dolor sit amet consectetur.
                                 </h2>
                                 <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique blanditiis nesciunt consectetur doloribus.
                                 </p>

                                 <span>$ {item3.space}</span>
                                 <br />
                                 <button>EXPLORE</button>
                              </div>
                           </div>
                        </li>
                     ))
                  }
               </ul>
            </div>
         </div>
      </div>
   )
}

export default Course
