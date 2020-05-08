import React, { Component} from 'react';
import './App.css';
import ValidateComponent from './ValidateComponent';

//click count, everytime you click the button it adds one
//Router with three routes instead of three seperate pages
//passing a callback prop to child component
class App extends Component {
  state = {
    text: 'Today is going to be a good day!',
  }

  handleAddClick = () => {
    this.setState({
      num: this.state.num + 1,
    })
  }

  handleAddText = (event) => {
    this.setState({
      text: event.target.value,
    })
    return this.text
  }
  handleTextLength = () => {
    const myString = this.state.text
    const textLength = myString.length();
    this.setState({
      textLength: textLength
    })
  }
  render(){
  console.log(this.state)
  return (
    <div className="App">
      <ValidateComponent 
      change = {this.handleAddText}
        text = {this.state.text}
        // length = {this.handleTextLength}
      />
    </div>
  );
}
}

export default App;
