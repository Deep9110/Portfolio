import React from 'react'
import Cart2 from '../cart/blog/Cart2'
import './Blog.css'
const Blog = () => {
  return (
    <div className='blogs'>
        <h1>Blogs</h1>
        <div className="each-blog">
            <Cart2/>
        </div>
        <div className='more-blogs'>
            <a href="https://deep9110.hashnode.dev/" target="_blank">
            <h4>More Blogs...</h4>
            </a>
        
        </div>
        
        
    </div>
  )
}

export default Blog