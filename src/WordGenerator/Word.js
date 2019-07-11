import React, { Component } from 'react';
import './Word.css';
import Letter from '../LetterGenerator/Letter';

// Special note about .. vs . for file path.  When importing component to component with folders.  Double.. required

// TODO: Installed CORS Chrome extension to by-pass CORS origin issue.  Will need to resolve later

console.log(Object.keys(Letter))


const url = 'https://en.wikipedia.org/w/api.php?action=opensearch&search=a';



class wordGenerator extends Component {

    constructor() {
        super();
        this.state = { words: [] }
    }


    componentDidMount() {
        fetch(url)
            .then(results => {
                return results.json();
            })
            .then(data => {
                let words = data
                console.log(words)
            })

    }

    render(){
        return(
            <div>
                <p id="word" className="word">Someword</p>
            </div >
        )
    }
 


};

export default wordGenerator;