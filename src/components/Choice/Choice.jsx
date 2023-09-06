import React from 'react'
import './Choice.scss'
import { forYou } from '../../lib/forYou'
import Design from '../../img/choice-design.png'
import Clock from '../../img/choice-clock.png'
function Choice() {
    return (
        <div className='Choice'>
            <div className="container">
                <div className="choice-inner">
                    <div className="choice-top">
                        <h1>Get choice of your course</h1>
                        <p>See all</p>
                    </div>
                    <div className="choice-lists">
                        <ul>
                            {
                                forYou?.map((item, index) => (
                                    <li className='choice-items' key={index}>
                                        <img src={item.img} alt="" />
                                        <div className='choice-item-date'>
                                            <span>
                                                <img src={Design} alt="" />
                                                <p>Design</p>
                                            </span>
                                            <span>
                                                <img src={Clock} alt="" />
                                                <p>3 Month</p>
                                            </span>
                                        </div>
                                        <h1>{item.title}</h1>
                                        <div className='choice-content'>
                                            <span>
                                                <img src="" alt="" />
                                                <h4></h4>
                                            </span>
                                            <span>
                                                <p>$100</p>
                                                <p>${item.price}</p>
                                            </span>
                                        </div>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className="choice__bottom">
                        <div className="choice__bottom__inner">
                            <h2>
                                Online coaching lessons for remote learning.
                            </h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod tempor
                            </p>
                            <button>
                                    Start learning now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Choice