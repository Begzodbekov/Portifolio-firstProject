import React from 'react'
import './Blog.scss'
import BlogUI from '../../components/BlogUI/BlogUI'
import Related from '../../components/Related/Related'
import Marketing from '../../components/Marketing/Marketing'
import Reading from '../../components/Reading/Reading'
function Blog() {
  return (
    <div className='Blog'>
        <BlogUI/>
        <Reading/>
        <Related/>
        <Marketing/>
    </div>

)
}

export default Blog