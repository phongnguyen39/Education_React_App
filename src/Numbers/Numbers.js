import React from 'react';
import './Numbers.css';

// Method to spell out number
const spellIt = (props) => {
    console.log(props)
}

const random = () => {
    let randomNumOutput = Math.ceil(Math.random() * 10);
    console.log(randomNumOutput)
    return randomNumOutput;
}


const Numbers = () => {

    // categoryNumbers = (
    //     <div id = 'numbers'>
    //         {number.map((number,index)=>{
    //             return <span onClick={this.selectNumber.bind(this.letter)} key={index} value={number}>{number}</span>
    //         })}
    //     </div>
    // )
    return (
        <div>
            <form>
                <input type='number' placeholder='Enter a number'></input>
                <button type='submit' value='Spell It'></button>
            </form>
            <div id='numbers'>{this.randomNumOutput}</div>
            <button onClick={random}>Random Number</button>


            <ul>
                <li>Be able to select numbers</li>
                <li>Write the numbers</li>
            </ul>
        </div>
    );
};

export default Numbers;