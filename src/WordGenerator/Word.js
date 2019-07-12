import React from 'react';
import './Word.css';

const word = (props) => {
    return(
        <div>
            <h2>Wiki Word of the Day</h2>
            <p className="word">{props.randomWord}</p>
            <p className='description'>
            {props.wordDescription}
            </p>
            <a href='{props.wordLink}' className='link'>{props.wordLink}</a>
        </div>
    );
};
export default word;