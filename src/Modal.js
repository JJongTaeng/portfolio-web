import React, {useState} from 'react'
import '../css/Modal.css'
import Instagram from './Instagram'


const Modal = (props) => {
  return (
    <div className="modal-page">
      {props.index===1 ? <Instagram></Instagram> : props.index}
    </div>
  )
}

export default Modal;