import React, { Component } from 'react';
import './App.css';
import Letter from './LetterGenerator/Letter';
import Word from './WordGenerator/Word';

class App extends Component {

  state = {
    letters: 'Aa',
    words: [],
    otherState: '',
    word:''
  }

  randomize = () => {
    let url= 'https://en.wikipedia.org/w/api.php?action=opensearch&search='
    const alpha = "abcdefghijklmnopqrstuvwxyz";
    let rand = Math.floor(Math.random() * 26)
    let output = alpha.charAt(rand).toUpperCase() + " " + alpha.charAt(rand).toLowerCase();
    this.setState({
      letters:output
    })
    let search = url + output[2]
    console.log(output);
    this.fetchFromAPI(search)
  }

  selectLetter = (props) => {
    this.setState({
      letters: props + props.toLowerCase()
    })
  }
  
  fetchFromAPI = (url) => {
    fetch(url)
    .then((response) => response.json())
    .then(data => {
        this.setState({words:data, word:data[1][1]})
        console.log(this.state.words);
    })
   
  }

  render() {
    const style = {
      font: '1.5em'
    }
    let categoryLetters = null;
    const capLetter = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',]
    categoryLetters = (
      <div id="alphabet">
        {capLetter.map((letter, index) => {
          return <span onClick={this.selectLetter.bind(this, letter)} key={index} value={letter}>{letter}</span>
        })}
      </div>
    );
    return (
      <div className="App" >
        <link href="https://fonts.googleapis.com/css?family=Permanent+Marker&display=swap" rel="stylesheet"></link>
        <h1 id="title">Fun with Letters and Words</h1>
        <p>Select a letter</p>
        {categoryLetters}
        <h1 id="lg-letter">
          {/* <Letter style = {style} letters={this.state.letters[0]}>{this.state.letters[0]}</Letter> */}
          <Letter style = {style} letter={this.state.letters}/>
        </h1>
        <button onClick={this.randomize}>Random Letter</button>
        
        <Word 
          id='word' 
          randomWord={this.state.word} 
        />
      </div>
    );
  }
}

export default App;
