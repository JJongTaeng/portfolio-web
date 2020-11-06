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
    contentImages: ['','./webpack.png','./babel.png',''],
    imageIndex: [false, true, true, false],
    description: [
      `안녕하세요. 웹팩과 바벨로 CRA없이 리액트 개발 환경을 구성을 했습니다.

       기존에 만들어진 CRA는 제가 모르는 파일도 많고, 왜 이 파일이 필요하고 어떠한 역할을 하는 지 감이 안잡혔습니다.

       "그러면!! CRA없이 리액트를 사용해보자!!" 라는 마음이 들었고, 웹팩과 바벨을 배워서 개발 환경을 구성해보았습니다.`,
      `웹팩은 여러가지 기능이 있지만 리액트를 구성하는데 중점적으로 하겠습니다. 
  
      일단 웹팩을 다운로드 하는 방법은 
      
      @@npm i webpack

      다운로드 해줍니다.

      구성
      - 모드  
      - 엔트리 
      - 아웃풋
      - 로더
      - 플러그인

      모드는 웹팩 실행 모드를 의미하고 production / development 둘중에 하나 선택하면 됩니다.
      
      엔트리는 시작점 경로를 지정하는 옵션입니다.

      아웃풋은 번들링 결과물을 위치할 경로입니다.

      @@module.exports = {
        @@@@mode: mode,
        @@@@entry: {
        @@@@@@main: "./src/index.js"
        @@@@},
        @@@@output: {
        @@@@@@filename: "[name].js",
        @@@@@@path: path.resolve('./dist'),
      @@@@},
      
      
      webpack.config.js 파일에 코드를 작성해줍니다.
      
      위처럼 작성하게 되면 src/index.js 파일을 기준으로 연결된 파일들을 모듈화 하여 dist 폴더에 main.js로 번들링하여 생성합니다.
      
      웹팩은 모든 파일을 모듈로 바라봅니다. 
      
      css파일이나 이미지 파일 등 전부 모듈로 보기 때문에 import 구문을 사용하면 자바스크립트 코드안으로 가져올 수 있습니다.
      
      이것이 가능한 이유가 웹팩의 로더 덕분입니다.

      자주 사용하는 로더로 css-loader와 style-loader, file-loader, url-loader 등 이 있습니다.

      css-loader는 css파일을 import 구문으로 가져올 수 있게 해줍니다. (모듈화)

      style-loader는 모듈로 변경된 css파일을 동적으로 돔에 추가 해줍니다. (반영)

      file-loader는 파일을 모듈 형태로 지원하고 웹팩 아웃풋에 파일을 옮겨주는 것이 file-loader가 하는 일입니다.
      
      babel-loader는 바벨을 웹팩으로 통합해서 사용하는 것을 로더 형태로 제공 해줍니다.

      바벨에 대한 내용은 밑에서 다시 정리하겠습니다.

      @@npm i style-loader css-loader file-loader url-loader babel-loader

      로더 4개를 다운 받습니다.
      
      @@module: {
        @@@@rules: [
          @@@@@@{
            @@@@@@@@test: /\.(js|jsx)$/,
            @@@@@@@@exclude: /node_moudels/,
            @@@@@@@@loader: "babel-loader",
            @@@@@@@@options: {presets: ["@babel/env"]},
            @@@@@@},
          @@@@@@{
            @@@@@@@@test: /\.(scss|css)/,
            @@@@@@@@use: [
              @@@@@@@@@@"style-loader",
              @@@@@@@@@@"css-loader",
              @@@@@@@@]
          @@@@@@},
          @@@@@@{
            @@@@@@@@test: /\.(jpg|png|svg|gif)$/,
            @@@@@@@@use:{
              @@@@@@@@@@loader: 'url-loader',
              @@@@@@@@@@options: {
                @@@@@@@@@@@@publicPath:'./',
                @@@@@@@@@@@@name:"[name].[ext]?[hash]",
                @@@@@@@@@@@@limit: 10000000,
              @@@@@@@@@@},
            @@@@@@@@}
          @@@@@@},
        @@@@]
      @@},

      위의 코드처럼 설정해줍니다.

      로더가 파일 단위로 처리하는 반면 플러그인은 번들된 결과물을 처리합니다.

      여러가지 플러그인이 있지만 html-webpack-plugin만 사용하겠습니다.

      @@npm i html-webpack-plugin

      @@plugins: [
        @@@@new HtmlWebpackPlugin({
          @@@@@@template: './src/index.html',
        @@@@}),
      @@]
      
      플러그인 설정도 끝났으면 바벨로 넘어가겠습니다!!
      `,
      `브라우저의 종류와 버전마다 지원해주는 자바스크립트의 언어가 달라 일관적이지 못할 때가 많습니다.

      그것을 변환해주는 것이 바벨입니다. "트랜스파일"한다라고 표현합니다.

      예를들어 JSX-> 자바스크립트로 변환을 해준다거나...

      바벨도 내용이 많고 다양한 플러그인/프리셋을 사용하지만 리액트 환경구성에 필요한 바벨 프리셋은
      
      가장 기본적인 env와 preset-react 입니다.

      @@npm i @babel/core @babel/env @babel/preset-react
      
      바벨과 사용할 프리셋을 다운로드하고 .babelrc파일을 생성하여 밑의 코드를 작성합니다.

      @@{
        @@@@"presets": [
            @@@@@@"@babel/preset-react",
            @@@@@@"@babel/env"
        @@@@]
      @@}
       
      바벨을 사용하여 리액트 코드를 변환하고 웹팩으로 번들링하여 파일으르 생성합니다. 그 파일이 직접 구성한 개발 환경에서 리액트를 사용한 파일입니다.
      `,

      `CRA에서는 더 다양한 기능을 제공해주지만 직접 개발환경을 구현하면서 알게된 부분들도 많았습니다.
      
      webpack에는 개발 서버를 구성한다던가 다양한 기능이 있고, 바벨도 마찬가지로 더욱 다양하고 편리한 기능들이 많습니다.

      차근차근 배워가며 기능을 추가해야 할 것 같습니다.

      어설픈 글 읽어주셔서 감사합니다.
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

export default Post_2;