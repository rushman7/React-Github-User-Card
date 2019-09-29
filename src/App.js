import React, { Component } from 'react';
import axios from 'axios';
import UserCard from './components/UserCard';
import SearchForm from './components/SearchForm';
import Box from '@material-ui/core/Box';
import './App.css';

class App extends Component {
  constructor() {
    super() 
    this.state = {
      users: [],
      search: ''
    }
  }

  componentDidMount() {
    axios
      .get('https://api.github.com/users/rushman7')
      .then(res => {
        this.setState({ users: [...this.state.users, res.data] })
      })
      .catch(err => console.log('Error: ', err))

    axios
      .get('https://api.github.com/users/rushman7/followers')
      .then(res => {
        res.data.map(user => this.setState({ users: [...this.state.users, user] }))
      })
      .catch(err => console.log('Error: ', err))
  }

  // onSearch() {
  //   const filtered = this.state.users.filter(userName => userName.login.indexOf(pokeSearch) !== -1)
  // }

  filterOnChange = (e) => {
    this.setState({ search: e.target.value })
  }

  render() {
    const filtered = this.state.users.filter(userName => userName.login.indexOf(this.state.search) !== -1)
    return (
      <div className="App">
        <h2 className="title">GitHub User Cards</h2>
        <SearchForm 
          search={this.state.search}
          onChange={this.filterOnChange}
        />
        <Box className="card-list">
          {filtered.map(user => <UserCard key={user.id} data={user}/>)}
        </Box>
      </div>
    );
  }
}

export default App;
