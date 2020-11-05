import React from 'react';
import '../../css/Blog.css'
import {Route, Link} from 'react-router-dom'
import Post_1 from './Post_1';
const Blog = () => {
  const post = [
    {
      title: 'React + Webpack + babel로 포트폴리오 웹 만들기!!!!'
    }
  ]
  return (
    <div className="blog-page">
      <nav className='blog-nav'>
        <div>
          <p className="blog-header-name">쫑탱's BLOG</p>
          <div className="blog-header-bar">
            <Link to="/" className="blog-header-link">소개</Link>
            <a href="https://github.com/jjongtaeng" className="blog-header-link">깃허브</a>
          </div>
          <input type="search" className="blog-search-box"/>
          <input type="submit" value="검색" className="blog-search-submit"/>
        </div>
      </nav>
      <Route path='/blog'exact={true} render={()=><div>
      <div className="blog-middle-top">
      <div className="blog-description">주니어 개발자로서 성장하는 과정을 기록하고 있습니다.</div>
      <div className="blog-count">
        <p>발행 포스트</p>
        <span>00</span>
      </div>
      <div className="blog-late-date">
        <p>최근 업로드</p>
        <span>2020.11.04</span>
      </div>
    </div>
    <div className="blog-middle">
      <div className="blog-middle-header">
        <div className="pin"></div>
        <p>POST</p>
        <div className="pin"></div>
      </div>
      <div className="blog-post-list">
        <div className="blog-post-items blog-post-1">
          <Link to="/blog/1" className="blog-post-back back-1">
            <p>{post[0].title}</p>
          </Link>
        </div>
      </div>
    </div></div>
      }></Route>
      <Route path="/blog/1" render={()=><Post_1 post={post}/>}></Route>
      <footer className="footer">
        <p className="git">github : <a href="https://github.com/JJongTaeng">Welcome JJongTaeng's github</a></p>
        <p className="made-by">made by JJongTaeng</p>
      </footer>
    </div>
  )
}

export default Blog;