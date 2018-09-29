import React, { Component } from "react";

export default class FilterObject extends Component {
  constructor() {
    super();
    this.state = {
      employees: [
        {
          name: "Jimmy Joe",
          title: "Hack0r",
          age: 12
        },
        {
          name: "Jeremy Schrader",
          age: 24,
          hairColor: "brown"
        },
        {
          name: "Carly Armstrong",
          title: "CEO"
        }
      ],
      userInput: "",
      filteredEmployees: []
    };
  }

  handleChange(val) {
    this.setState({ userInput: val });
  }

  filterEmployees(prop) {
    // The problem summary: Using a pre-determined array of objects,
    // filter out objects that do not have a given property. Display 
    // a new array populated with the objects that do have the given property.

    var employees = this.state.employees;
    var results = [];

    for (var i = 0; i < employees.length; i++){
      if (employees[i].hasOwnProperty(prop)){
        results.push(employees[i]);
      }
    }
    this.setState({filteredEmployees: results}); 
  }
  
  render() {
    return (
      <div className="puzzleBox filterObjectPB">
        <h4> Filter Object </h4>
        <span className="puzzleText">
          {" "}
          Original: {JSON.stringify(this.state.employees, null, 10)}
        </span>
        <input className="inputLine" onChange= { (e) => this.handleChange(e.target.value) }/>
        <button
          className="confirmationButton"
          onClick={() => this.filterEmployees(this.state.userInput)}> Filter</button>
        <span className="resultsBox filterObjectRB">
          {" "}
          Filtered: {JSON.stringify(this.state.filteredEmployees, null, 10)}{" "}
        </span>
      </div>
    )
  }
}
