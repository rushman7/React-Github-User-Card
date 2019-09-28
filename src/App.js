import React, { Component } from 'react';
import axios from 'axios';
import UserCard from './components/UserCard';
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
        <h2>GitHub User Cards</h2>
        {this.state.users.map(user => <UserCard key={user.id} data={user}/>)}
      </div>
    );
  }
}

export default App;
