import React  from 'react';
import "./Card.css";

function Card(props) {

    return (

        <div className="flip-card">
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    <img src={props.item.imgSrc} alt="Avatar" />
                    <h1>{props.item.title}</h1>
                </div>
                <div className="flip-card-back">
                    <h1>{props.item.title}</h1>
                    <p>{props.item.subTitle}</p>
                    <a href={props.item.link} target="_blank" rel="noopener noreferrer">{props.item.link}</a>
                </div>
            </div>
      </div> 
    )
  }



export default Card;