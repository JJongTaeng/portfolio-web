import React from 'react';
import '../../css/Post.css'
import styled from 'styled-components';
import {Route, Link} from 'react-router-dom'
const Post_3 = ({post}) => {
  const content = {
    id: 3,
    date: '2020.11.13',
    list : ['교육기간','발표', '입상','마무리'],
    titleImages: './post-3.png',
    contentImages: ['','./post-3_1.png','./post-3_2.png',''],
    imageIndex: [false, true, true, false],
    description: [
      `6개월 동안 진행된 비트컴퓨터 교육 과정이 끝났습니다.
      
      교육 플랫폼은 인공지능이였지만 저는 웹으로 진로를 정했고 개인적으로 웹 위주로 공부를 하였습니다.
      
      교육기간동안 지낸 몇몇분들에게 정이 많이 들었는데 아쉬운 감정도 조금 있습니다.`
      ,

      `
      발표 준비를 많이 못했습니다.. 사전에 발표를 한다고 들었지만 이 발표가 최종 발표임을 알지 못했고 이전에 한번 발표를 했었기 때문에 준비를 많이 안했습니다.

      하지만 발표 규모가 생각보다 커서 당황했습니다.

      발표는 늘 부족함을 느끼고 떨리는 것 같습니다.

      더 많은 경험을 하면 나아질거라 생각합니다.
      `,

      `
      발표를 못해서 프로젝트 관련 상은 받지 못했지만 6개월동안 노력했던 시간들이 보였는지 제가 노력상을 받았습니다.

      다른 친구들도 노력해서 기대는 안하고 있던 상황에서 받은 상이라 기분도 좋았습니다.
      
      물론 부상으로 주어진 10만원도 좋았습니다 ㅎㅎ
      `,

      `
      아직 가야할 길은 너무도 멀기에 이거를 원동력 삼아 더 발전할 수 있도록 노력할 것 입니다.
      
      노력하면 분명 돌아오는 것이 있을거라 믿는게 좋은거 같아요.

      잘할 수 있다~~
      `,
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
                  return link.trim().startsWith('@@') ? <div className='post-code-box'>{link.split('@@').map((elem,index,all)=>{
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

export default Post_3;