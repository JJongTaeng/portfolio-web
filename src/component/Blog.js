import React, {useState} from 'react';
import '../../css/Blog.css'
import {Route, Link} from 'react-router-dom'
import styled from 'styled-components';


import Post_1 from './Post_1';
import Post_2 from './Post_2';
const Blog = () => {
  const [tagData, setTagData] = useState('');
  const [post, setPost] = useState([
    {
      id: 2,
      title: 'CRA 없이 리액트 개발환경 구현하기!!!!',
      date: '2020.11.06',
      tag: ['react', 'webpack','babel'],
      image: "/post-2.png",
      link: '/blog/2'
    },
    { id: 1,
      title: 'React + Webpack + babel로 포트폴리오 웹 만들기!!!!',
      date: '2020.11.05',
      tag: ['react','portfolio'],
      image: "/post-1.png",
      link: '/blog/1',
    },
  ])
  const basicPost = [
    {
      id: 2,
      title: 'CRA 없이 리액트 개발환경 구현하기!!!!',
      date: '2020.11.06',
      tag: ['react', 'webpack','babel'],
      image: "/post-2.png",
      link: '/blog/2'
    },
    { id: 1,
      title: 'React + Webpack + babel로 포트폴리오 웹 만들기!!!!',
      date: '2020.11.05',
      tag: ['react','portfolio'],
      image: "/post-1.png",
      link: '/blog/1',
    },
  ]
  const onChangeTagData = e => setTagData(e.target.value);
  const Tag = styled.div`
    display:flex;
    align-items: center;
    & p {
      margin-right: 1rem;
    }
    & p:before {
      content: '@';
    }
    & span {
      margin-right: 0.5rem;
      font-size: 0.8rem;
      font-weight: 400;
      color: white;
    }
  `
  const onClick = () => {
    if(!tagData) {
      setPost(basicPost);
      setTagData('');
      return;
    }
    const newPost = post.filter((elem, index, all)=>{
      return elem.tag.includes(tagData);
    })
    if(newPost.length===0) {
      setTagData('');
      return;
    }
    setPost(newPost);
    setTagData('');
  }
  const onKeyPress = e => {
    if(e.key==='Enter') onClick();
  }

  return (
    <div className="blog-page">
      <nav className='blog-nav'>
        <div>
          <p className="blog-header-name">쫑탱's BLOG</p>
          <div className="blog-header-bar">
            <Link to="/" className="blog-header-link">소개</Link>
            <a href="https://github.com/jjongtaeng" className="blog-header-link">깃허브</a>
          </div>
          <input type="search" value={tagData}  onKeyPress={onKeyPress} onChange={onChangeTagData} placeholder="전체 게시물 -> 내용없이 검색" className="blog-search-box"/>
          <input type="submit" onClick={onClick} value="검색" className="blog-search-submit"/>
        </div>
      </nav>
      <Route path='/blog'exact={true} render={()=><div>
      <div className="blog-middle-top">
      <div className="blog-description">주니어 개발자로서 성장하는 과정을 기록하고 있습니다.</div>
      <div className="blog-count">
        <p>발행 포스트</p>
        <span>{post.length}</span>
      </div>
      <div className="blog-late-date">
        <p>최근 업로드</p>
        <span>{post[0].date}</span>
      </div>
    </div>
    <div className="blog-middle">
      <div className="blog-middle-header">
        <div className="pin"></div>
        <p>POST</p>
        <div className="pin"></div>
      </div>
      <div className="blog-post-list">
      {post.map((elem, index, all)=>{
        const PostItem = styled.div`
          width: calc(1170px / 3);
          height: calc(1170px / 3);
          background-image: url('./blog${elem.image}');
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
          @media (max-width: 500px) {
            width: calc(1125px / 3);
            height: calc(1125px / 3);
          }
        `
        return (
        <div className="hover-scale">
        <PostItem>
          <Link to={elem.link} onClick={()=>{
            window.scrollTo(0,0);
          }} className="blog-post-back back-1">
            <p className="blog-post-back-title">{elem.title}</p>
            <p className="blog-post-back-date">{elem.date}</p>
            <Tag>
              <p>TAG :</p>
              {post[index].tag.map((param)=>{
                return (<span>{param} /</span>)
              })}
            </Tag>
          </Link>
        </PostItem></div>
      )
      })}
      </div>
    </div></div>
      }></Route>
      <Route path="/blog/1" render={()=><Post_1 post={post}/>}></Route>
      <Route path="/blog/2" render={()=><Post_2 post={post}/>}></Route>
      <footer className="footer">
        <p className="git">github : <a href="https://github.com/JJongTaeng">Welcome JJongTaeng's github</a></p>
        <p className="made-by">made by JJongTaeng</p>
      </footer>
    </div>
  )
}

export default Blog;