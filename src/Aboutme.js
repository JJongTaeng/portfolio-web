import React from 'react'
import '../css/Aboutme.css'

const Aboutme = () =>{  
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
              <span></span>
              <p>HTML5</p>
            </div>
            <div className="skills-item CSS">
              <span></span>
              <p>CSS3</p>
            </div>
            <div className="skills-item JS">
              <span></span>
              <p>JavaScript</p>
            </div>
            <div className="skills-item Node">
              <span></span>
              <p>NodeJS</p>
            </div>
            <div className="skills-item Webpack">
              <span></span>
              <p>Webpack</p>
            </div>
            <div className="skills-item Babel">
              <span></span>
              <p>Babel</p>
            </div>
            <div className="skills-item Eslint">
              <span></span>
              <p>Eslint</p>
            </div>
            <div className="skills-item React">
              <span></span>
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
              <span></span>
              <p>NodeJS</p>
            </div>
            <div className="skills-item Express">
              <span></span>
              <p>express</p>
            </div>
            <div className="skills-item MySQL">
              <span></span>
              <p>MySQL</p>
            </div>
            <div className="skills-item MongoDB">
              <span></span>
              <p>MongoDB</p>
            </div>
          </div>
        </div>
      </section>
      <section className="profile-introduce"></section>
    </div>
  )
}

export default Aboutme;