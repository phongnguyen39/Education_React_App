import React from 'react';
import './Numbers.css';

// Method to spell out number
const spellIt = (inputNum) => {
    console.log(inputNum)
}


const numbers = () => {
    const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    // categoryNumbers = (
    //     <div id = 'numbers'>
    //         {number.map((number,index)=>{
    //             return <span onClick={this.selectNumber.bind(this.letter)} key={index} value={number}>{number}</span>
    //         })}
    //     </div>
    // )
    return (
        <div id='numbers'>
            <form action='/spellIt'>
                <input type='number' placeholder='Enter a number'></input>
                <button type = 'submit' value='Spell It'></button>
            </form>


            <ul>
                <li>Be able to select numbers</li>
                <li>Write the numbers</li>
            </ul>
        </div>
    );
};

export default numbers;