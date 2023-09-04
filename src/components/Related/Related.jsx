import React, { useState } from 'react'
import './Related.scss'
import related3 from '../../img/related__3.png'
import {  related1 } from '../../lib/related'
import { Link } from 'react-router-dom'


function Related() {
    const [active , setActive] = useState(0)
    console.log(active);
  return (
    
    <div className='related'>
        <div className="container">
            <div className="related-inner">
                <div className="related__top">
                    <p>
                    Related Blog
                    </p>
                    <p className='related__top1'> 
                    See all
                    </p>
                </div>
                <ul className='related__list'>
                        {
                            related1?.map((item , index)=>(
                                    <li className='related__list-item' key={index}>
                                         <div className="big">
                                         <div className='related__list-div'>
                                                 <img src={item.img} alt="img" />
                                                 <p>Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution</p>
                                            </div>
                                            <span className='related__list-inner'>
                                            <img src={related3} alt="img" />
                                            <p>
                                                Lina
                                            </p>
                                            </span>
                                            <p className='related__p'>
                                                Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...
                                            </p>
                                            <div className="related__list-bottom">
                                                    <Link>Read more</Link>
                                                    <span className='related__list-bottom__item'>
                                                    <i className="bi bi-eye"></i>
                                                    <p>251,232</p>
                                                    </span>
                                            </div>
                                         </div>
                            
                                    </li>
                            ))
                        }
                </ul>
            <div className="related__bottom">
                <button onClick={()=> setActive(2)}  className={active == 2  ? 'slide2':'bottom__btn'}  ><i className="bi  bi-arrow-left-short"></i></button>
                <button onClick={()=> setActive(1)}  className={active == 1  ? 'slide1':'bottom__btn'}><i className="bi  bi-arrow-right-short"></i></button>
                

            </div>
            </div>
        </div>
    </div>
  )
}

export default Related
