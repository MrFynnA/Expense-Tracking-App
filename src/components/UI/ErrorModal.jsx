import React from 'react';
import ReactDom from 'react-dom';
import styles from './ErrorModal.module.css';
import Card from './Card'




const Backdrop=(props)=>{
    return <div className={styles.backdrop}  onClick={props.onConfirmB}/>
}
const Modal=(props)=>{
       return <Card className={styles.modal}>
       <header>
           <h3>{props.title}</h3>
       </header>
       <div>
               <h4>{props.message}</h4>
       </div>
       <footer className={styles.action}>
<button onClick={props.onConfirmM}>{props.text}</button>
       </footer>
       
       </Card>
}

const ErrorModal=(props)=>{
    return(
     
        <React.Fragment>    
        {ReactDom.createPortal(<Backdrop onConfirmB={props.onConfirm}/>, document.getElementById('backdrop_root'))}
        {ReactDom.createPortal(<Modal title={props.title} message={props.message} onConfirmM={props.onConfirm} text={props.text}/>, document.getElementById('overlay_root'))}
        </React.Fragment>
       
    )
}


export default ErrorModal;