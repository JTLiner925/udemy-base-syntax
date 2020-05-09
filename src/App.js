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

  deleteCharHandler = ( index ) => {
    const text = this.state.text.split('');
    text.splice(index, 1);
    const updatedText = text.join('');
    this.setState({text:updatedText});
  }
  // handleLetterDelete = (letter) => {
    
    
  //   let text = this.state.text.split('') 
  //   console.log(text)
  //   let index = text.indexOf(letter)
  //   console.log(index)
  //   text.splice(index, 1)
  //   this.setState({
  //     text: text.join(''),
  //     index: index,
  //     key: this.state.id
  //   })
  // }
  render(){
    let charList = this.state.text.split('').map((char, index) => {
      return <CharComponent 
      character={char} 
      key={index}
      clicked={() => this.deleteCharHandler(index)}/>
    })
  return (
    <div className="App">
      <input onChange={this.handleAddText} value={this.state.text}/>
      
      <ValidateComponent 
        length = {this.state.text.length}
      />
      {charList}
    </div>
  );
}
}

export default App;
