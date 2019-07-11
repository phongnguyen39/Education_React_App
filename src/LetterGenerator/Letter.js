import React from 'react';
import './Letter.css'

const letter = (props) => {
    console.log('Letter.js props ran'+ '\n' + props)
    console.log(
        Object.keys(props),
        props[1]
        )
    const alpha = "abcdefghijklmnopqrstuvwxyz";
    let rand = Math.floor(Math.random() * 26)
    let output = alpha.charAt(rand).toUpperCase() + " " + alpha.charAt(rand).toLowerCase();
    return output;
}

export default letter;