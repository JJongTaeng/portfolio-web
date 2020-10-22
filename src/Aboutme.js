import React from 'react'
import '../css/Aboutme.css'

const Aboutme = () =>{
  const image =[
    {
      backgroundImage: "url('../images/html.png')",
    },
    {
      backgroundImage: "url('../images/css.png')",
    },
    {
      backgroundImage: "url('../images/javascript.png')",
    },
    {
      backgroundImage: "url('../images/node.png')",
    },
    {
      backgroundImage: "url('../images/webpack.png')",
    },
    {
      backgroundImage: "url('../images/babel.png')",
    },
    {
      backgroundImage: "url('../images/eslint.png')",
    },
    {
      backgroundImage: "url('../images/react.png')",
    },
    {
      backgroundImage: "url('../images/express.png')",
    },
    {
      backgroundImage: "url('../images/mysql.png')",
    },
    {
      backgroundImage: "url('../images/mongodb.png')",
    },
  ] 
  
  return (
    <div className="profile-page">
      <section className="profile">
        <div className="profile-image-container">
          <p className="profile-image"></p>
        </div>
        <div className="profile-description">
          {/* <p className="profile-name">조인태</p> */}
          <p className="profile-header">기초가 탄탄한 WEB 개발자</p>
          <p className="profile-simple-contents">
            안녕하세요.<br></br>
            저는 뒤쳐지지 않는 개발자가 되기 위해 노력하는 조인태입니다.<br></br>
            하루하루 늘고, 일주일 후엔 <span className="color-dodgerblue">성장</span>을 느끼고 있습니다.<br></br>
            <span className="italic">"천재는 노력하는 자를 이길 수 없고 노력하는 자는 즐기는 자를 이길 수 없다"</span><br></br>
            <span className="color-dodgerblue">저는 코딩이 즐겁습니다. 계속 즐겁게 하고싶습니다.</span>
          </p>
        </div>
      </section>
      <section className="skill">
        <div className="front-skill">
          <div className="skill-header">
            <p className="use-tech">Front Skills</p>
            <p className="line"></p>
          </div>
          <div className="skills-list">
            <div className="skills-item HTML">
              <span style={image[0]}></span>
              <p>HTML5</p>
            </div>
            <div className="skills-item CSS">
              <span style={image[1]}></span>
              <p>CSS3</p>
            </div>
            <div className="skills-item JS">
              <span style={image[2]}></span>
              <p>JavaScript</p>
            </div>
            <div className="skills-item Node">
              <span style={image[3]}></span>
              <p>NodeJS</p>
            </div>
            <div className="skills-item Webpack">
              <span style={image[4]}></span>
              <p>Webpack</p>
            </div>
            <div className="skills-item Babel">
              <span style={image[5]}></span>
              <p>Babel</p>
            </div>
            <div className="skills-item Eslint">
              <span style={image[6]}></span>
              <p>Eslint</p>
            </div>
            <div className="skills-item React">
              <span style={image[7]}></span>
              <p>React</p>
            </div>
          </div>
        </div>
        <div className="back-skill">
          <div className="skill-header">
            <p className="use-tech">Back Skills</p>
            <p className="line"></p>
          </div>
          <div className="skills-list">
            <div className="skills-item Node">
              <span style={image[3]}></span>
              <p></p>
            </div>
            <div className="skills-item Express">
              <span style={image[8]}></span>
              <p></p>
            </div>
            <div className="skills-item MySQL">
              <span style={image[9]}></span>
              <p></p>
            </div>
            <div className="skills-item MongoDB">
              <span style={image[10]}></span>
              <p></p>
            </div>
          </div>
        </div>
      </section>
      <section className="profile-introduce"></section>
    </div>
  )
}

export default Aboutme;