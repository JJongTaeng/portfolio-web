import React, {useState} from 'react';
import '../../css/Modal.css';
import Instagram from './Instagram';
import Note from './Note';
import Account from './Account';
import Apple from './Apple';
import Responsive from './Responsive';

const Modal = (props) => {
  return (
    <div className="modal-page">
      {
        props.index===1 ?
        <Instagram></Instagram> : (props.index === 2) ?
        <Account></Account> : (props.index===3) ?
        <Note></Note> : (props.index===4) ?
        <Apple></Apple> : <Responsive></Responsive>
      }
    </div>
  )
}

export default Modal;