import React, {useState} from 'react';
import '../css/App.css';
import '../css/default.css';
import Aboutme from './Aboutme';
import Project from './Project';
import Contact from './Contact';

const App = () => {
  const [index, setIndex] = useState(1);
  return (
    <div>
      <section className="header">
        <div className="header-text">
          <p>
            <span className="i">I</span>
            <span className="n">n</span>
            <span className="t">t</span>
            <span className="a">a</span>
            <span className="e">e</span>
            <span className="x">'</span>
            <span className="s">s</span>
            <span className="p"> P</span>
            <span className="o">o</span>
            <span className="r">r</span>
            <span className="t">t</span>
            <span className="f">f</span>
            <span className="o">o</span>
            <span className="l">l</span>
            <span className="i">i</span>
            <span className="o">o</span>

          </p>
        </div>
      </section>
      <section className="button-list">
        <div className="button aboutme" onClick={
          ()=>setIndex(1)
        }>About me</div>
        <div className="button project" onClick={
          ()=>setIndex(2)
        }>Projects</div>
        <div className="button contact" onClick={
          ()=>setIndex(3)
        }>contact</div>
      </section>
      <section className="contents">
        {
          index === 1 ? 
          <Aboutme></Aboutme> : (index===2) ? 
          <Project></Project> : <Contact></Contact>
        }
      </section>
      <footer className="footer">
        <p className="git">github : <a href="https://github.com/JJongTaeng">Welcome JJongTaeng's github</a></p>
        <p className="made-by">made by JJongTaeng</p>
      </footer>
    </div>
   )
}

export default App