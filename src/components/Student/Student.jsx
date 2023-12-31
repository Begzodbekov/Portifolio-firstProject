import React from 'react'
import { Link } from 'react-router-dom'
import { marketing } from '../../lib/Marketing'
import img1 from '../../img/marketing__img__item.svg'
import img2 from '../../img/markering__img__item2.svg'
import './Student.scss'

function Student() {
  return (
    <div className='Student'>
        <div className="container">
                <div className="student__inner">
                <div className="student__top">
                            <h2>
                            Student are viewing
                            </h2>
                            <Link>See all</Link>

                </div>
                <div className="student__bottom">
                        <ul className='student__list'>
                        
                             {
                                marketing?.map((item,index)=>(
                                        <li className='student__item' key={index}>
                                               <div className="student__item__top">
                                                        <span className='img'>
                                                            <img src={item.img} alt="" />
                                                            </span>
                                                        <span className='student__item__icons'>
                                                            <span className='student__item__icons1'>
                                                                <img src={img1} alt="img" />
                                                                <p>
                                                                    Design
                                                                </p>
                                                            </span>
                                                            <span className='student__item__icons2'>
                                                                <img src={img2} alt="img" />
                                                                <p>3 Month</p>
                                                            </span>
                                                        </span>
                                                </div>
                                               <div className="student__center">
                                                <h2>
                                                        {item.h2}
                                                    </h2>
                                                    <p>
                                                        {
                                                            item.p
                                                        }
                                                    </p>
                                               </div>
                                               <div className="student__bottom">
                                                        <span className='student__bottom__icon1'>
                                                        <img src={item.img2} alt="img" />
                                                        <p>Lina</p>
                                                        </span>
                                                        <span className='student__bottom__icon2'>
                                                            <del className='old'>
                                                                {item.oldp}
                                                            </del>
                                                            <p className='student__bottom__icon2__p'>
                                                                {
                                                                    item.price
                                                                }
                                                            </p>
                                                        </span>
                                               </div>
                                        </li>
                                ))
                             }
                        </ul>
                </div>
                </div>
        </div>
    </div>
  )
}

export default Student