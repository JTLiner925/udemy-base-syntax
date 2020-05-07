import React, { Component} from 'react';
import UserInput from './UserInput';
import UserOutput from './UserOutput.js';
import './App.css';

class App extends Component {
  state = {
    userName: 'Dave',
  }

  handleAddUser = (event) => {
    this.setState({
      userName: event.target.value,
    })
  }
  render(){
    console.log(this.handleAddUser)
  return (
    <div className="App">
      <UserInput change={this.handleAddUser}/>
      <UserOutput  userName={this.state.userName} />
      <UserOutput userName={this.state.userName}/>
    </div>
  );
}
}

export default App;
