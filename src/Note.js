import React from 'react';
import '../css/Note.css';

const Note = () => {
  return(
    <div className="project-list">
      <div className="project-link">
        <a href="https://github.com/JJongTaeng/3d-note" target="_blank">git : 3d-Note</a>
      </div>
      <div className="project-image note-image1"></div>
      <div className="project-image note-image2"></div>
      <div className="project-image note-image3"></div>
      <div className="project-image note-image4"></div>
    </div>
  )
}

export default Note;