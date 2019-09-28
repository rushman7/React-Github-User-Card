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
      .then(res => {
        this.setState({ users: [...this.state.users, res.data] })
        console.log(this.state.users)
      })
      .catch(err => console.log('Error: ', err))
  }

  render() {
    return (
      <div className="App">
        {this.state.users.map(user => <p key={user.id}>{user.name}</p>)}
      </div>
    );
  }
}

export default App;
