import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor() {
    super() 
    this.state = {
      users: []
    }
  }

  componentDidMount() {
    axios
      .get('https://api.github.com/users/rushman7')
      .then(res => console.log(res.data))
      .catch(err => console.log('Error: ', err))
  }

  render() {
    return (
      <div className="App">
        React App
      </div>
    );
  }
}

export default App;
