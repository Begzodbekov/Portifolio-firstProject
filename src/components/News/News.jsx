import React from 'react'
import './News.scss';
import img1 from '../../img/Rectangle 32.png'
import img2 from '../../img/Rectangle 33.png'
import img3 from '../../img/Rectangle 34.png'
import img4 from '../../img/Rectangle 37 (1).png'
function News() {
  return (
    <div className='News'>
      <div className="laster">
      <h4 className='laster__tittle'>Lastest News and Resources</h4>
          <p className='totc'>See the developments that have occurred to TOTC in the world</p> 
        <div className="inner">
        <div className="left__laster">            
            <div>
            <img src={img1} alt="img" /> 
              </div>          
            <div>
            <span className='news'>NEWS</span>
            <h5 className='info'>Class adds $30 million to its balance sheet for <br /> a Zoom-friendly edtech solution</h5>
            <p className='laster__P'>Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...</p>
            <span className='link'>
              <a className='laster__link' href="#/">Read more</a>
            </span> 
              </div>          
            </div>
            <div className="right__laster">
                 <ul className='laster__list'>
                  <li className='laster__item'>
                    <img className='first__img' src={img2} alt="img" />
                    <h5 className='first__tittle'>Class Technologies Inc. Closes $30 Million <br /> Series A Financing to Meet High Demand</h5>
                    <p className='first__info'>Class Technologies Inc., the company that <br /> created Class,...</p>
                  </li>
                  <li className='laster__item'>
                    <img className='first__img' src={img3} alt="img" />
                    <h5 className='first__tittle'>Class Technologies Inc. Closes $30 Million <br /> Series A Financing to Meet High Demand</h5>
                    <p className='first__info'>Class Technologies Inc., the company that <br /> created Class,...</p>
                  </li>
                  <li className='laster__item'>
                    <img className='first__img' src={img4} alt="img" />
                    <h5 className='first__tittle'>Class Technologies Inc. Closes $30 Million <br /> Series A Financing to Meet High Demand</h5>
                    <p className='first__info'>Class Technologies Inc., the company that <br /> created Class,....</p>
                  </li>
                    
                 </ul>
            </div>   
        </div>
        </div>
  
    </div>
  )
}

export default News