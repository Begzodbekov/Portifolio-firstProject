import React from 'react'
import './Blog.scss'
import BlogUI from '../../components/BlogUI/BlogUI'
import Related from '../../components/Related/Related'
import Marketing from '../../components/Marketing/Marketing'
function Blog() {
  return (
    <div className='Blog'>
        <BlogUI/>
        <Related/>
        <Marketing/>
    </div>

)
}

export default Blog