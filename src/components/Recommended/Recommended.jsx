import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Recommended.scss'
import { forYou } from '../../lib/forYou'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';


function Recommended() {

  return (
    <div className="recommended">
     <div className="container">
     <div className="container__recommended ">
        <div className="recommended__body">
          <div className="recommended__titles">
            <h5 className='rec__title1'>Recommended for you</h5>
            <Link className='rec__link1'>See all</Link>
          </div>
          <ul className='recommended__list'>
          <Swiper
                    slidesPerView={4}
                    spaceBetween={10}
                    navigation={true}
                    modules={[Navigation]}
                    className="mySwiper"
              >
            {
              forYou?.map((item, index) => (
                 <SwiperSlide >     
                  <li key={index} className='recommended__cards'>
                    <img src={item.img1} alt="" className='rec__card__1__1' />
                    <div className="cards__text">
                      <span className='Design'>
                        <img src={item.img2} alt="" />
                        <p className='Design__text'>Design</p>
                      </span>
                      <span className='clock'>
                        <img src={item.img3} alt="" />
                        <p className='clock__text'>3 Month</p>
                      </span>
                    </div>
                    <div className="cards__text__2">
                      <span >
                        <h3 className='card1__title1'>{item.title}</h3>
                      </span>
                      <span>
                        <p className='card1__title2'>
                          {item.content}
                        </p>
                      </span>
                      <span className='Lina__card'>
                        <img className='img4' src={item.img4} alt="" />
                        <h5 className='Lina'>Lina</h5>
                        <span className='price'>
                        <p className='dollar__1'>$100</p>
                        <p className='dollar2'>${item.price}</p>
                      </span>
                      </span>

                    </div>


                  </li>
                  </SwiperSlide>
              ))
            }
              </Swiper>
          </ul>
        </div>
      </div>
     </div>
    </div>
  )
}

export default Recommended