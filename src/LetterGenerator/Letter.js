import React from 'react';
import './Letter.css'

const letter = (props) => {
 
    
        const alpha = "abcdefghijklmnopqrstuvwxyz";    
        let rand = Math.floor(Math.random()*26)
        let output = alpha.charAt(rand).toUpperCase() + " " + alpha.charAt(rand).toLowerCase();
        
    // INLINE CSS - NEED TO ADD style={style} to an element
    // const style = {
    //     backgroundColor: '#1A535C',
    //     color: '#F7FFF7',
    //     padding: '10px',
    //     border: '1x solid gray',
    // }


    return (
        <div>
            <p id="letters" className = "Letter">{output}</p>
        </div>
    )

}

export default letter;