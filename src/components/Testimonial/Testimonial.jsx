import React from 'react'
import img from '../../img/smiling-woman-with-afro-posing-pink-sweater 1.png'
import './Testimonial.scss'

function Testimonial() {
  return (
    <div className='Testimonial'>
      <div className="abd">
       <div className="say__item">
        <div className="say__left">
          <p className='left__p'>
            ---------    TESTIMONIAL
          </p>
          <h2>
            What They Say?
          </h2>
          <p className='left__p2'>
            TOTC has got more than 100k positive ratings from our users around the world.
            <br />
            <br />
            Some of the students and teachers were greatly helped by the Skilline.
            <br />
            <br />
            Are you too? Please give your assessment
          </p>
          <button className='left__btn'>
            Write your assessment

          </button>
        </div>
        <div className="say__right">
          <div className="big">
            <div className="say__right__inner">
              <img src={img} alt="img" />
              <span className='say__right__bottom'>
                <p>
                  "Thank you so much for your help. It's exactly what I've been looking for. You won't regret it. It really saves me time and effort. TOTC is exactly what our business has been lacking."
                </p>
                <span className='text'>
                  <span >
                    <h4>
                      Gloria Rose
                    </h4>
                  </span>
                  <span className='icons'>
                    <i className="bi bi-star"></i>
                    <i className="bi bi-star"></i>
                    <i className="bi bi-star"></i>
                    <i className="bi bi-star"></i>
                    <i className="bi bi-star"></i>
                    <p>
                      12 reviews at Yelp
                    </p>
                  </span>
                </span>
              </span>
            </div>

          </div>

        </div>
      </div>
      </div>
    </div>
  )
}

export default Testimonial