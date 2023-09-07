import React from 'react'
import './Development.scss'
import { marketing } from '../../lib/Marketing'
import img1 from '../../img/marketing__img__item.svg'
import img2 from '../../img/markering__img__item2.svg'
function Development() {
  return (
    <div className='Development'>
        <div className="container">
            <div className="development_inner">
                <div className="development_top">
                    <h1>The course in personal development</h1>
                    <p>See all</p>
                </div>
                <ul className='development__list'>
                        
                        {
                           marketing?.map((item,index)=>(
                                   <li className='development__item' key={index}>
                                          <div className="development__item__top">
                                                   <span className='img'>
                                                       <img src={item.img} alt="" />
                                                       </span>
                                                   <span className='development__item__icons'>
                                                       <span className='development__item__icons1'>
                                                           <img src={img1} alt="img" />
                                                           <p>
                                                               Design
                                                           </p>
                                                       </span>
                                                       <span className='development__item__icons2'>
                                                           <img src={img2} alt="img" />
                                                           <p>3 Month</p>
                                                       </span>
                                                   </span>
                                           </div>
                                          <div className="development__center">
                                           <h2>
                                                   {item.h2}
                                               </h2>
                                               <p>
                                                   {
                                                       item.p
                                                   }
                                               </p>
                                          </div>
                                          <div className="development__bottom">
                                                   <span className='development__bottom__icon1'>
                                                    <img src={item.img2} alt="img" />
                                                    <p>Lina</p>
                                                   </span>
                                                   <span className='development__bottom__icon2'>
                                                       <del className='old'>
                                                           {item.oldp}
                                                       </del>
                                                       <p className='development__bottom__icon2__p'>${item.price}</p>
                                                   </span>
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

export default Development