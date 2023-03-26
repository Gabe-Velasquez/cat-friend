import React, {Component} from 'react';
import CardList from './CardList';
import Searchbox from './Searchbox.js';
import Scroll  from './Scroll.js';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      cats:[],
      searchfield: ''
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=> response.json())
      .then(users => this.setState({cats: users}));
  }

  onSearchChange = (event) => {
    this.setState({searchfield: event.target.value})
  }

  render(){
    const { cats, searchfield } = this.state;
    const filteredCats = this.state.cats.filter(cat => {
      return cat.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
    })
    return !cats.length ? 
    <h1>Loading...Please wait. Meow...</h1>:
    (
      <div className='tc'>
        <h1 className='f1'>The Litter Box</h1>
        <Searchbox searchChange = {this.onSearchChange}/>
        <Scroll>
          <CardList cats={filteredCats}/>
        </Scroll>
      </div>
    );
  }
}
export default App;
