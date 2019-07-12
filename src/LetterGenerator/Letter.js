import React from 'react';
import './Letter.css'

const letter = (props) => {
    // console.log('Letter.js props ran'+ '\n' + props)
    // console.log(
    //     Object.keys(props),
    //     props[1]
    //     )
    // const alpha = "abcdefghijklmnopqrstuvwxyz";
    // let rand = Math.floor(Math.random() * 26)
    // let output = alpha.charAt(rand).toUpperCase() + " " + alpha.charAt(rand).toLowerCase();
    // return output;

    // const element = document.querySelector('p');
    // element.classList.add('animated','bounce');
    // element.addEventListener('animationend',function(){
    //     animateCSS('p','bounce')
    // })


    return(
        <div>
             <link href="https://fonts.googleapis.com/css?family=Permanent+Marker&display=swap" rel="stylesheet"></link>
            <p  className="animated bounce">{props.letter}</p>
        </div>
    )
}

export default letter;