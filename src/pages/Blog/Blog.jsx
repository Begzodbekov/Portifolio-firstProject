import React from 'react'
import './Blog.scss'
import Related from '../../components/Related/Related'
import BlogUI from '../../components/BlogUI/BlogUI'
function Blog() {
  return (
    <div className='blog container'>
          <Related/>
        <BlogUI/>
    </div>

)
}

export default Blog