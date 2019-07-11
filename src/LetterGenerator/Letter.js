import React from 'react';
import './Letter.css'

var output;

const letter = (props) => {

  

    const alpha = "abcdefghijklmnopqrstuvwxyz";
    let rand = Math.floor(Math.random() * 26)
    output = alpha.charAt(rand).toUpperCase() + " " + alpha.charAt(rand).toLowerCase();
    return output;
}

export default letter;