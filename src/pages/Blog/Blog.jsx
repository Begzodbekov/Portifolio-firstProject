import React from 'react'
import './Blog.scss'
import BlogUI from '../../components/BlogUI/BlogUI'
import Related from '../../components/Related/Related'
function Blog() {
  return (
    <div className='Blog'>
        <BlogUI/>
        <Related/>
    </div>

)
}

export default Blog