import React, { Component } from 'react';
import './App.css';
import Letter from './LetterGenerator/Letter';
import Word from './WordGenerator/Word';



const reload = () => {
  window.location.reload();
}

class App extends Component {

  state = {
    letters: [],
    words: [],
    otherState: ''
  }

  randomize = () =>{
    this.setState({
        
    })
  }

  selectLetter = (props) => {
    console.log("Letter")
    console.log(Object.values(props.toString()))
    this.setState({
      letters: props.button
    })
  }


  render() {

    return (
      <div className="App" >

        <link href="https://fonts.googleapis.com/css?family=Permanent+Marker&display=swap" rel="stylesheet"></link>

        <h1 id="title">Fun with Letters and Words</h1>
        <div id="alphabet">
          <span><button onClick={this.selectLetter}> A </button></span>
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
        </div>
        <button className='Letter' onClick={this.randomize}><Letter letters={this.state.letters} /></button>

        <Word></Word>


        {/* <div className='zBox1'></div>
      <div className='zBox2'></div>
      <div className='zBox3'></div> */}


      </div>
    );
  }
}

export default App;
