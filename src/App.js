import React, {Component} from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import './App.css'

class App extends Component {
  constructor(){
    super()
    this.state = {
      robots: [],
      searchfield: ''
    };
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => {this.setState({robots: users})})
  }

  render(){
    const filteredRobot = this.state.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
    })
    if(this.state.robots.length === 0){
      return <h1>Loading</h1>
    } else {
      return(
        <div className='tc'>
          <h1 className='f1'>RoboFriends</h1>
          <SearchBox searchChanges={this.onSearchChange}/>
          <CardList robots={filteredRobot}/>
        </div>
      )
    }
  }
}

export default App