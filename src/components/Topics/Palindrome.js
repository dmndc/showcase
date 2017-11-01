import React, { Component } from 'react';

class Palindrome extends Component {
  constructor() {
    super()

    this.state = {
      userInput: '',
      palindrome: ''
    }
  }

  handleChange(val) {
    this.setState({ userInput: val })
  }

  isPalindrome(word) {
    word === word.split('').reverse().join('') 
      ?
      this.setState({ palindrome: 'true' })
      :
      this.setState({ palindrome: 'false' })
  }

  render() {
    return (
      <div className="puzzleBox filterStringPB">
        <h4>Palindrome</h4>
        <input className="inputLine" onChange={ (e) => { this.handleChange(e.target.value)}}></input>
        <button className="confirmationButton" onClick={ () => {this.isPalindrome(this.state.userInput)} }>Check</button>
        <span className="resultsBox">Palindrome: {this.state.palindrome} </span>
      </div>
    )
  }
}

export default Palindrome;