import React, { Fragment } from 'react';
import ReactDom from 'react-dom';
import './Model.css';

const ModalOverlay = (props) => {
    return <div className='modal'>
        <div className='content'>{props.children}</div>
    </div>
}

  const portalId = document.getElementById('cartOverlays');

const Modal = (props) => {
    return (
        <Fragment>
         
        </Fragment>
    )
}

export default Modal