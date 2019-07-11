import React from 'react';
import './App.css';
import Letter from './LetterGenerator/Letter';
import Word from './WordGenerator/Word';


const newLetter = () => {
  const alpha = "abcdefghijklmnopqrstuvwxyz";
  let rand = Math.floor(Math.random() * 26)
  let output = alpha.charAt(rand).toUpperCase() + " " + alpha.charAt(rand).toLowerCase();
  console.log(output);
  return (
    <div>
      <p id="letters" className="Letter">{output}</p>
    </div>
  );
}

const reload = () => {
  window.location.reload();
}

function App() {
  console.log("App.js Running")
  return (
    <div className="App">

      <link href="https://fonts.googleapis.com/css?family=Permanent+Marker&display=swap" rel="stylesheet"></link>

      <h1 id="title">Fun with Letters and Words</h1>
      <h4 id="alphabet">
        <span>A </span>
        <span>B </span>
        <span>C </span>
        <span>D </span>
        <span>E </span>
        <span>F </span>
        <span>G </span>
        <span>H </span>
        <span>I </span>
        <span>J </span>
        <span>K </span>
        <span>M </span>
        <span>N </span>
        <span>O </span>
        <span>P </span>
        <span>Q </span>
        <span>R </span>
        <span>S </span>
        <span>T </span>
        <span>U </span>
        <span>V </span>
        <span>W </span>
        <span>X </span>
        <span>Y </span>
        <span>Z </span>
      </h4>
      <button onClick={newLetter}><Letter /></button>
      <Word></Word>


      {/* <div className='zBox1'></div>
      <div className='zBox2'></div>
      <div className='zBox3'></div> */}


    </div>
  );
}

export default App;
