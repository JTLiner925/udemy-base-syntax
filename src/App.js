import React, { Component} from 'react';
import './App.css';
import CharComponent from './CharComponent';
import ValidateComponent from './ValidateComponent';

//click count, everytime you click the button it adds one
//Router with three routes instead of three seperate pages
//passing a callback prop to child component
class App extends Component {
  state = {
    text: '',
    id: 0
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
  }

  handleLetterDelete = (letter) => {
    
    
    let text = this.state.text.split('') 
    console.log(text)
    let index = text.indexOf(letter)
    console.log(index)
    text.splice(index, 1)
    this.setState({
      text: text.join(''),
      index: index,
      key: this.state.id
    })
  }
  render(){
  return (
    <div className="App">
      <input onChange={this.handleAddText}/>
      
      <ValidateComponent 
        length = {this.state.text.length}
      />
      {this.state.text.split('').map(letter =>{
        return <CharComponent
          key={this.props.id}
          letter={letter} 
          delete = {this.handleLetterDelete}/>
      })}
    </div>
  );
}
}

export default App;
