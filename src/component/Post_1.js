import React from 'react';
import '../../css/Post.css'
import styled from 'styled-components';
import {Route, Link} from 'react-router-dom'
const Post_1 = ({post}) => {
  const content = {
    date: '2020.11.05',
    list : ['소개','이유!!', '사용 기술','리액트!'],
    images: ['./post-1.png','./post-1_1.png'],
    description: [
      `첫게시물 입니다.\n 스스로 만든 블로그에 포스팅을 한다는 것은 새롭고 즐겁네요.\n프로젝트 설명이 아니다보니 일기처럼 적고 가볍게 적으려고 해요! 웹 포트폴리오를 만들게 된 이유와 사용 기술에 대해 적어보겠습니다.`,
      `저는 일단 주니어 웹 개발자도 아닌 지망생이에요. 현재 리액트를 공부중이에요ㅎㅎ\n 리액트를 무언가 구현을 하면서 해야 즐겁게 공부 할 수 있을 것 같아서 현재 만드는 웹페이지를 리액트를 사용해서 만들고 있어요. \n 리액트는 개발 환경을 직접 구성하는 것이 복잡하게 느껴졌어요..\n CRA로 구성된 환경은 제가 모르는 파일이 많고 이 파일이 왜 필요한지에 대해 정확하게 알지 못한 상태로 만들려니 뭔가 찜찜하더라구요. \n 직접 개발 환경을 만들고, 리액트로 만들어진 HTML 파일을 깃허브로 호스팅 하게 되었어요. 웹팩과 바벨을 어떻게 사용해 구성하였는지는 다른 포스트에서 다루겠습니다... 정리도할겸!!`,
      `사용 기술은 HTML / CSS / JavaScript는 당연히 사용하였고, 리액트와 웹팩 바벨을 사용하였습니다. 위에 다 설명한 내용이네요..`,
      `함수형 컴포넌트와 클래스형 컴포넌트 중 함수형 컴포넌트를 사용하였습니다. \n 함수형 컴포넌트로 사용하게 된 이유는 리액트 공식문서에서 함수형 컴포넌트로 사용을 권장한다고 하네요. 그래도 클래스형 컴포넌트도 사용할 줄 알아야 할 것 같아요. 클래스형 컴포넌트가 사라지는건 아니니까요.`,
    ]
  }
  const Image1 = styled.div`
    background-image: url('${content.images[0]}');
  `
  const Image2 = styled.div`
  background-image: url('${content.images[1]}');
  `


  return(
    <div className="post-page">
      <div className="post-header">
        <h1>{post[0].title}</h1>
        <p className="post-upload-date">{content.date}</p>
      </div>
      <div className="post-content-cover">
        <div className="post-content">
          <Image1 className="post-image"></Image1>
          <p id="1" className="post-list-link">{content.list[0]}</p>
          <p className="post-content-description">{content.description[0].split('\n').map(link=>{
            return (<span>{link}<br/></span>)
          })}</p>
          <p id="2" className="post-list-link">{content.list[1]}</p>
          <p className="post-content-description">{content.description[1].split('\n').map(link=>{
            return (<span>{link}<br/></span>)
          })}</p>
          <p id="3" className="post-list-link">{content.list[2]}</p>
          <p className="post-content-description">{content.description[2].split('\n').map(link=>{
            return (<span>{link}<br/></span>)
          })}</p>
          <p id="4" className="post-list-link">{content.list[3]}</p>
          <Image2 className="post-image"></Image2>
          <p className="post-content-description">{content.description[3].split('\n').map(link=>{
            return (<span>{link}<br/></span>)
          })}</p>
        </div>
        <div className="post-right-list">
          <ul className="post-ul-list">
            <span className="post-dodgerblue">목록</span>
            <li className="post-list-link">
              <a href="#1">{content.list[0]}</a>
            </li>
            <li className="post-list-link">
              <a href="#2">{content.list[1]}</a>
            </li>
            <li className="post-list-link">
              <a href="#3">{content.list[2]}</a>
            </li>
            <li className="post-list-link">
              <a href="#4">{content.list[3]}</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="post-tag-list">
        <p className="post-list-link">@태그 : </p>
        {post[0].tag.map((param)=>{
          return ( 
            <div className='post-tag-item'>
              <p>{param}</p>
            </div>
          )
        })}
      </div>
      <Link to='/blog' onClick={()=>{
            window.scrollTo(0,0);
          }} className="post-back">목록으로 가기</Link>
    </div>
  )
}

export default Post_1;