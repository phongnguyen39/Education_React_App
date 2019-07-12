import React from 'react';
import './Word.css';

const word = (props) => {
    return(
        <div>
            <p>{props.randomWord}</p>
        </div>
    );
};
export default word;