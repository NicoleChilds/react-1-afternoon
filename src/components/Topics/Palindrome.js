import React, {Component} from 'react';

export default class Palindrome extends Component{
    constructor(){
        super();

        this.state = {
            userInput: " ",
            palindrome: " "
        };
    }
    
    handleChange(val){
        this.setState({ userInput: val});
    }

    isPalindrome(userInput){
        // The problem summary: Using a given string, determine if it is spelt the same backwards as it is forwards.
      var userInput = this.state.userInput;
      var isPalindrome = '';
      var re = /[\W_]/g;
      var lowRegStr = userInput.toLowerCase().replace(re, '');
      var reverseStr = lowRegStr.split('').reverse().join('');
      //return reverseStr ===lowRegStr;

      if (reverseStr === lowRegStr){
        this.setState({palindrome: 'true'});
      } else {
        this.setState({palindrome: 'false'});
      }
    }
    
    

    render (){
        return (
            <div className="puzzleBox palindromePB">
              <h4> Palindrome </h4>  
              <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value)}></input>
              <button className="confirmationButton" onClick={ () => this.isPalindrome(this.state.userInput)}> Check </button>
              <span className="resultsBox"> Palindrome: {this.state.palindrome} </span>
            </div>
        )
    }
}

