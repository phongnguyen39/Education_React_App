import React, { Component } from 'react';
import './App.css';
import Letter from './LetterGenerator/Letter';
import Word from './WordGenerator/Word';
import { BrowerRouter as Router, Route, Link } from 'react-router-dom';

class App extends Component {

  state = {
    letters: 'Aa',
    words: [],
    otherState: '',
    word: [],
    description: '',
    link: ''
  }
  

  randomize = () => {
    let url = 'https://en.wikipedia.org/w/api.php?action=opensearch&search='
    const alpha = "abcdefghijklmnopqrstuvwxyz";
    let rand = Math.floor(Math.random() * 26)
    let output = alpha.charAt(rand).toUpperCase() + " " + alpha.charAt(rand).toLowerCase();
    this.setState({
      letters: output
    })
    let search = url + output[2]
    console.log(output);
    this.fetchFromAPI(search)
    return output;
  }

  selectLetter = (props) => {
    let url = 'https://en.wikipedia.org/w/api.php?action=opensearch&search='
    const alpha = "abcdefghijklmnopqrstuvwxyz";
    let rand = Math.floor(Math.random() * 26)
    let output = alpha.charAt(rand).toUpperCase() + "  " + alpha.charAt(rand).toLowerCase();
    this.setState({
      letters: props + props.toLowerCase()
    })
    let search = url + props + output + output;
    console.log(search)
    this.fetchFromAPI(search)
  }

  fetchFromAPI = (url) => {

    // {credentials:'same-origin'}
    //{mode:'no-cors'}

    // headers: {'content-type': 'application/json', 

    fetch(url,{
      mode: 'cors',
      // credentials: 'same-origin',
      crossDomain: true,
      method: 'post',
      headers: {'Access-Control-Allow-Origin':'*'}
    })
      .then((response) => response.json())
      .then(data => {
        console.log(data)
        if (data[1][1] == null) {
          console.log('error')
          return;
        } else {
          this.setState({
            words: data,
            word: data[1][1],
            description: data[2][1],
            link: data[3][1]
          })
          console.log(this.state.words);
        }
      })
  }

  render() {
    const style = {
      font: '1.5em'
    }
    let categoryLetters = null;
    const capLetter = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',]
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
        <div id='landingContainer'>
          <h2><span>Here is how this works... </span></h2><br></br>
          
          <p>1. Select a letter of your choosing <br></br>-or-<br></br> We can pick one for you</p>
          <p>2. Have the little one receit it</p>
          <p>3. Then onto the Wikipedia Word of the Day</p><br></br>
          
          
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#010101" d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"/></svg>
          <p>Let's get started</p>
        </div>
        <p>Select a letter</p>
        {categoryLetters}
        <div id="container">

          <Letter style={style} letter={this.state.letters} />
          <button onClick={this.randomize}>Random Letter</button>

          <Word
            randomWord={this.state.word}
            wordDescription={this.state.description}
            wordLink={this.state.link}
          />

        </div>
      </div>
    );
  }
}

export default App;
