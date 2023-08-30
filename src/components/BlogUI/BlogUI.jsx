import React from 'react'
import './BlogUI.scss'
import img from '../../img/blogUI.png'


function BlogUI() {
  return (
    <div className='blog_ui'>
      <div className="container">

        <div className="blog_ui_inner">
          <div className="blog_ui_text">

            <div className="blog_ui_text_1">By Themadbrains in <b>inspiration</b></div>
            <div className="blog_ui_text_2">Why Swift UI Should Be on the Radar of Every Mobile Developer</div>
            <div className="blog_ui_text_3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod tempor</div>
            <button id='blogUI_btn'>Start learning now</button>
            
          </div>

          <img src={img} alt="" />
          
        </div>
        
      </div>
    </div>
  )
}

export default BlogUI