import React from "react"
import './Card.css'

const Card=(props)=>{
   const cardStyle='card '+props.className;
    return <div className={`${cardStyle}`}>{props.children}</div>
}
export default Card;