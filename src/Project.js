import React, {useState} from 'react';
import '../css/Project.css';
import Modal from './Modal'

const Project = () => {
  const [visible, setVisible] = useState(false);
  const [index, setIndex] = useState(0);
  return(
    <div>
      <section className="project-page">
        <div className="project-header">
          <p className="project-header-title">Projects</p>
        </div>
        <div className="card-list">
          <div className="card-item" onClick={()=>{
            setVisible(true);
            setIndex(1)
          }}>
            <div className="card-image instagram"></div>
            <div className="card-bottom">
              <p className="card-title">프로젝트 명</p>
              <p className="card-description">Clone-Instagram</p>
            </div>
          </div>
          <div className="card-item" onClick={()=>{
            setVisible(true);
            setIndex(2)
          }}>
            <div className="card-image account"></div>
            <div className="card-bottom">
              <p className="card-title">프로젝트 명</p>
              <p className="card-description">Simple-AccountBook</p>
            </div>
          </div>
          <div className="card-item" onClick={()=>{
            setVisible(true);
            setIndex(3)
          }}>
            <div className="card-image note-3d"></div>
            <div className="card-bottom">
              <p className="card-title">프로젝트 명</p>
              <p className="card-description">3D-Note</p>
            </div>
          </div>
          <div className="card-item" onClick={()=>{
            setVisible(true);
            setIndex(4)
          }}>
            <div className="card-image apple"></div>
            <div className="card-bottom">
              <p className="card-title">프로젝트 명</p>
              <p className="card-description">Clone Apple Webpage</p>
            </div>
          </div>
          <div className="card-item" onClick={()=>{
            setVisible(true);
            setIndex(5)
          }}>
            <div className="card-image responsive"></div>
            <div className="card-bottom">
              <p className="card-title">프로젝트 명</p>
              <p className="card-description">Responsive web</p>
            </div>
          </div>
        </div>
      </section>
      
      {visible ? <div className="X-button" onClick={()=>{
        setVisible(false);
      }}>✖</div> : null}
      {visible ? <section className="modal">
        <Modal index={index}></Modal>
      </section> : null}
    </div>
  )
}

export default Project