import React, { useRef, useState } from 'react';
import './Lessons.scss'
import { lessond } from '../../lib/Lessond'
// import Left from '../../img/lessons-button_left.png'
// import Right from '../../img/lessons-button_right.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
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
                 <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    navigation={true}
                    modules={[Navigation]}
                    className="mySwiper"
              >
                  {
                    lessond?.map((item,index)=>(
                      <SwiperSlide>
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
                           <p className='lessons-list_p'>Lesson 5 of 7</p>
                        </li>
                      </SwiperSlide>
                    ))
                  }
                 </Swiper>
                </ul>
                {/* <div className="lessons-buttons">
                  <button className='lessons-left'><img src={Left} alt="" /></button>
                  <button className='lessons-right'><img src={Right} alt="" /></button>
                </div> */}
            </div>
        </div>
    </div>
  )
}

export default Lessons