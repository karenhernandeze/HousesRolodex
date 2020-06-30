import React from 'react';
import './card.style.css'

export const Card = (props) => (
    <div className='card-container'> 
    <img 
    src={require(`/Users/karenhernandeze/Desktop/WRSP-FB/web_page/src/components/card/images/${props.house.id}.jpg`)}
    alt="Houses"
    width= '192'
    height='93.2'
    />
    <h2> {props.house.name} </h2>
    <h3> {props.house.price} </h3>
    </div>
)