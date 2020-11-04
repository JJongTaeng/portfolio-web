import React from 'react';
import '../../css/Blog.css'
import {Route, Link} from 'react-router-dom'
const Blog = () => {
  return (
    <div>
      <nav className='blog-nav'>
        <Link to='/' className="blog-header-name">쫑탱</Link>
        <input type="search" className="blog-search-box"/>
        <input type="submit" value="검색" className="blog-search-submit"/>
      </nav>
      <div className="blog-middle-top">
        <div className="blog-description">배워가는 과정을 기록하고 있습니다.</div>
        <div className="blog-count">
          <p>발행 포스트</p>
          <span></span>
        </div>
        <div className="blog-late-date">
          <p>최근 업로드</p>
          <span>2020.11.04</span>
        </div>
      </div>
      <div className="blog-middle">
        <div className="blog-middle-header">
          <div className="pin"></div>
          <h3>포스트</h3>
          <div className="pin"></div>
        </div>
        <div className="blog-post-list">
          <div className="blog-post-items blog-post-1"></div>
          <div className="blog-post-items blog-post-2"></div>
          <div className="blog-post-items blog-post-3"></div>
          <div className="blog-post-items blog-post-4"></div>
          <div className="blog-post-items blog-post-5"></div>
          <div className="blog-post-items blog-post-6"></div>
          <div className="blog-post-items blog-post-7"></div>
          <div className="blog-post-items blog-post-8"></div>
          <div className="blog-post-items blog-post-9"></div>
          <div className="blog-post-items blog-post-10"></div>
        </div>
      </div>
    </div>
  )
}

export default Blog;