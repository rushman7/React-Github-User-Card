import React, { Component } from 'react';
import axios from 'axios';
import UserCard from './components/UserCard';
import Box from '@material-ui/core/Box';
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

    axios
      .get('https://api.github.com/users/rushman7/followers')
      .then(res => {
        res.data.map(user => this.setState({ users: [...this.state.users, user] }) )
        console.log(this.state.users)
      })
      .catch(err => console.log('Error: ', err))
  }

  render() {
    return (
      <div className="App">
        <h2 className="title">GitHub User Cards</h2>
        <Box className="card-list">
          {this.state.users.map(user => <UserCard key={user.id} data={user}/>)}
        </Box>
      </div>
    );
  }
}

export default App;
