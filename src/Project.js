import React from 'react';
import '../css/Project.css';

const Project = () => {
  const images = [
    {
      backgroundImage: "url('../images/instagram.gif')"
    }
  ]
  return(
    <div>
      <section className="project-page">
        <div className="project-header">
          <p className="project-header-title">Projects</p>
        </div>
        <div className="card-list">
          <div className="card-item">
            <div className="card-image" style={images[0]}></div>
            <div className="card-bottom">
              <p className="card-title">프로젝트 명</p>
              <p className="card-description">Clone-Instagram</p>
            </div>
          </div>
          <div className="card-item"></div>
          <div className="card-item"></div>
        </div>
      </section>
    </div>
  )
}

export default Project