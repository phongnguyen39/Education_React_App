import React from 'react';
import './Word.css';

const word = (props) => {
    // console.log('WOrdddd', props)
    return(
        <div id='word'>
            <h2>Wiki Word of the Day</h2>
            <p className="word">{props.randomWord}</p>
            <p className='description'>
            {props.wordDescription}
            </p>
            <a href={props.wordLink} target ='_blank' className='link'>{props.wordLink}</a>
        </div>
    );
};
export default word;