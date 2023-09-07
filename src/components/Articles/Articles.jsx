import React from 'react'
import './Articles.scss'
import { Link } from 'react-router-dom'
import { marketing } from '../../lib/Marketing'
import img1 from '../../img/marketing__img__item.svg'
import img2 from '../../img/markering__img__item2.svg'
function Articles() {
  return (
    <div className='Articles'>
        <div className="container">
            <div className="articles__inner">
            <div className="articles__top">
                            <h2>
                            Marketing Articles
                            </h2>
                            <Link>See all</Link>

                </div>
                <div className="articles__bottom">
                        <ul className='articles__list'>
                        
                             {
                                marketing?.map((item,index)=>(
                                        <li className='articles__item' key={index}>
                                               <div className="articles__item__top">
                                                        <span className='img'>
                                                            <img src={item.img} alt="" />
                                                            </span>
                                                        <span className='articles__item__icons'>
                                                            <span className='articles__item__icons1'>
                                                                <img src={img1} alt="img" />
                                                                <p>
                                                                    Design
                                                                </p>
                                                            </span>
                                                            <span className='articles__item__icons2'>
                                                                <img src={img2} alt="img" />
                                                                <p>3 Month</p>
                                                            </span>
                                                        </span>
                                                </div>
                                               <div className="articles__center">
                                                <h2>
                                                        {item.h2}
                                                    </h2>
                                                    <p>
                                                        {
                                                            item.p
                                                        }
                                                    </p>
                                               </div>
                                               <div className="articles__bottom">
                                                        <span className='articles__bottom__icon1'>
                                                        <img src={item.img2} alt="img" />
                                                        <p>Lina</p>
                                                        </span>
                                                        <span className='articles__bottom__icon2'>
                                                            <del className='old'>
                                                                {item.oldp}
                                                            </del>
                                                            <p className='articles__bottom__icon2__p'>
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

export default Articles