import React from 'react';
import '../../css/Post.css'
import styled from 'styled-components';
import {Route, Link} from 'react-router-dom'
const Post_2 = ({post}) => {
  const content = {
    id: 2,
    date: '2020.11.06',
    list : ['소개','webpack', 'babel','마무리'],
    titleImages: './post-2.png',
    contentImages: ['','','',''],
    imageIndex: [false, false, false, false],
    description: [
      `안녕하세요. 웹팩과 바벨로 CRA없이 리액트 개발 환경을 구성을 했습니다.\n 기존에 만들어진 CRA는 제가 모르는 파일도 많고, 왜 이 파일이 필요하고 어떠한 역할을 하는 지 감이 안잡혔습니다.\n그래서 그러면!! CRA없이 리액트를 사용해보자!! 라는 마음이 들었고, 웹팩과 바벨을 배워서 개발 환경을 구성해보았습니다.`,
      `웹팩은 여러가지 기능이 있지만 리액트를 구성하는데 중점적으로 하겠습니다.\n 웹팩 \n - 모드 \n - 엔트리\n - 아웃풋\n - 모듈 \n - 플러그인 \n 구성되어있습니다.`,
      `바벨 \n 바벨바벨 \n@@webpack.config.js\n@@@@export.module = {}`,
      `이로써 마무리 합니다..`,
    ]
  }
  const ImageTitle = styled.div`
    background-image: url('${content.titleImages}');
  `

  return(
    <div className="post-page">
      <div className="post-header">
        <h1>{post.map((elem, index, all)=>{
          return elem.id === content.id ? elem.title : null;
        })}</h1>
        <p className="post-upload-date">{content.date}</p>
      </div>
      <div className="post-content-cover">
        <div className="post-content">
          <ImageTitle className="post-image"></ImageTitle>
          {content.list.map((elem, index, all)=>{
            let Image;
            if(content.imageIndex[index]){
              Image = styled.div`
                background-image: url('${content.contentImages[index]}');
              `
            }
            return (
              <div>
                <p id={index+1} className="post-list-link">{elem}</p>
                { Image && <Image className="post-image"></Image> }
                <p className="post-content-description">{content.description[index].split('\n').map(link=>{
                  return link.startsWith('@@') ? <div className='post-code-box'>{link.split('@@').map((elem,index,all)=>{
                      return elem === '' ? <span className="white-space"></span> : <span>{elem}</span>
                  })}</div> : (<span>{link}<br/></span>)
                })}</p>
              </div>
            )
          })}
        </div>
        <div className="post-right-list">
          <ul className="post-ul-list">
            <span className="post-dodgerblue">목록</span>
            {content.list.map((elem, index, all)=>{
              return (
                <li className="post-list-link">
                  <a href={'#'+(index+1)}>{elem}</a>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
      <div className="post-tag-list">
        <p className="post-list-link">@태그 : </p>
        {
          post.map((elem, index, all)=>{
            return elem.id === content.id ? post[index].tag.map((param)=>{
              return ( 
                <div className='post-tag-item'>
                  <p>{param}</p>
                </div>
              )
            }) : null
          })
        }
      </div>
      <Link to='/blog' onClick={()=>{
            window.scrollTo(0,0);
          }} className="post-back">목록으로 가기</Link>
    </div>
    )
}

export default Post_2;