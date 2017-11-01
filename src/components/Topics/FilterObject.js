import React, { Component } from 'react';

class FilterObject extends Component {
  constructor() {
    super()

    this.state = {
      unFilteredArray: [
        {
          name: 'Tommy',
          title: 'Boss',
          age: 25
        },{
          name: 'Donald',
          hobby: 'Basketball',
          height: 210
        },{
          name: 'Jenny',
          hobby: 'Coding'
      }],
      userInput: '',
      filteredArray: []
    }
  }

  handleChange(val) {
    this.setState({ userInput: val })
  }

  filterArray(prop) {
    let unfiltered = this.state.unFilteredArray;
    let filtered = [];

    unfiltered.forEach((obj) => {
      if (obj.hasOwnProperty(prop)) {
        filtered.push(obj);
      }
    });

    this.setState({ filteredArray: filtered });
  }

  render() {
    return (
      <div className="puzzleBox filterObjectPB">
        <h4>Filter Object</h4>
        <span className="puzzleText">Original: { JSON.stringify(this.state.unFilteredArray) }</span>
        <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value)}></input>
        <button className="confirmationButton" onClick={ () => this.filterArray(this.state.userInput) }>Filter</button>
        <span className="resultsBox filterObjectRB">{ JSON.stringify(this.state.filteredArray) }</span>
      </div>
    )
  }
}

export default FilterObject;