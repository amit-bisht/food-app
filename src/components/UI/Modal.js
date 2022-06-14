import React from "react"
import classes from './Modal.module.css'
import * as ReactDOM from 'react-dom';

const Backdrop=(props)=>{
    return(
        <div className={classes.backdrop}></div>
    )
}
const Overlay=(props)=>{
    return(
        <div className={classes.modal}>
            <div className={classes.content}>
                {props.children}
            </div>
        </div>
    )
}
const Modal=(props)=>{
    return(
        <React.Fragment>
            {ReactDOM.createPortal(<Backdrop/>,document.getElementById('overlays'))}
            {ReactDOM.createPortal(<Overlay>{props.children}</Overlay>,document.getElementById('overlays'))}
        </React.Fragment>
    )
}

export default Modal;