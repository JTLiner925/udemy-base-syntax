import React, { Component} from 'react';
import UserInput from './UserInput';
import UserOutput from './UserOutput.js';
import Nav from './Nav';
import HomePage from './HomePage'
import { Route, Switch } from "react-router-dom";
import ClickCount from './ClickCount';
import './App.css';

//click count, everytime you click the button it adds one
//Router with three routes instead of three seperate pages
//passing a callback prop to child component
class App extends Component {
  state = {
    userName: 'Dave',
    num: 0,
  }

  handleAddClick = () => {
    this.setState({
      num: this.state.num + 1,
    })
  }

  handleAddUser = (event) => {
    this.setState({
      userName: event.target.value,
    })
  }
  render(){
  
  return (
    <div className="App">
      <nav>
        <Nav />
      </nav>
      <main>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route 
            path='/click-count' 
            render={() =>
              <ClickCount 
              num={this.state.num}
              click={this.handleAddClick}
              />}
          />
          <Route 
          path='/name-changer'
          render={() => 
            <>
              <UserInput change={this.handleAddUser}/>
              <UserOutput  userName={this.state.userName} />
            </>
          } />
      
      </Switch>
      </main>
    </div>
  );
}
}

export default App;
