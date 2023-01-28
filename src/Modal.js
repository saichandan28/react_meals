import classes from './Modal.module.css';
import ReactDOM from 'react-dom';
// import { useEffect } from 'react';

// const modalContainer = ReactDOM.createPortal (Modal,document.getElementById('modal-container'));

const Modal = (props) => {

    const handleOverlayOnClick = (e) => {
        if(e.target?.className.toLowerCase().includes('overlay')) props.closeModal();
    }

    const modalDiv = (
        <div className={classes["modal-overlay"]} onClick={handleOverlayOnClick}>
            <div className={classes["modal-class"]} closeModal={props.closeModal}> 
                {props.children} 
            </div>
        </div>
    );
    return ReactDOM.createPortal ( modalDiv , document.getElementById('modal-container'));
}

export default Modal;