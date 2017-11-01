import React, { Component } from 'react';

class FilterString extends Component {
  constructor() {
    super()

    this.state = {
      unFilteredArray: ['Bryce', 'Eric', 'Aja', 'Devin', 'Kara', 'Steven', 'Jack', 'Valentina', 'Kelly'],
      userInput: '',
      filteredArray: []
    }
  }

  handleChange(val) {
    this.setState({ userInput: val });
  }

  filterArray(str) {
    let names = this.state.unFilteredArray;
    let filtered = [];

    names.forEach((name) => {
      if (name.includes(str)) {
        filtered.push(name);
      }
    })

    this.setState({ filteredArray: filtered });
    
  }

  render() {
    return (
      <div className="puzzleBox filterStringPB">
        <h4>Filter String</h4>
        <span className="puzzleText">{ JSON.stringify(this.state.unFilteredArray) }</span>
        <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value ) }></input>
        <button className="confirmationButton" onClick={ () => this.filterArray(this.state.userInput) }>Filter</button>
        <span className="resultsBox filterStringRB">Filtred names: { JSON.stringify(this.state.filteredArray) }</span>
      </div>
    )
  }
}

export default FilterString;
