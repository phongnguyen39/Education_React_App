import React, { Component } from 'react';
import './App.css';
import Letter from './LetterGenerator/Letter';
import Word from './WordGenerator/Word';

class App extends Component {

  state = {
    letters: [],
    words: [],
    otherState: ''
  }

  randomize = () => {
    console.log("randomize ran")
    this.setState({

    })
  }

  selectLetter = (props) => {
    console.log("Letter")
    console.log(props[0])
    this.setState({
      letters: props[0]
    })

    return (
      <div>
        <p>props[0]</p>
      </div>
    )

  }

  render() {

    const style = {
      font: '1.5em'
    }

    return (
      <div className="App" >

        <link href="https://fonts.googleapis.com/css?family=Permanent+Marker&display=swap" rel="stylesheet"></link>

        <h1 id="title">Fun with Letters and Words</h1>
        <p>Select a letter</p>
        <div id="alphabet">
          <span onClick={this.selectLetter.bind(this, 'A')}>A </span>
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
        <h1 id="lg-letter">
          {/* <Letter style = {style} letters={this.state.letters[0]}>{this.state.letters[0]}</Letter> */}
          <Letter style = {style} letters={this.state.letters[0]}><selectedLeter></selectedLeter></Letter>
        </h1>
        <button onClick={this.randomize}>Random Letter</button>

        <Word id='word'></Word>
      </div>
    );
  }
}

export default App;
