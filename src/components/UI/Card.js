import React from 'react';
import './Card.css'; 

//custom Card wrapper

function Card(props){
    const classes='card ' + props.className; 

    return(<div className={classes}>{props.children}</div>);
}

export default Card;