import SearchBox from './Components/search-box/search-box.component';
import './App.css';
import React, {Component} from 'react';
import {CardList} from './Components/card-list/card-list.Components'
class App extends Component{
  constructor(){
    super();
    this.state = {
      pokedex:[],
      searchField:''
    };
  }
  
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({pokedex:users}));
  }
  //<button onClick = {()=> this.setState({string : 'Hello Broo'})}></button>
  OnSearchChange = e =>{
    const searchField = e.target.value.toLocaleLowerCase();
    this.setState(()=>{
      return {searchField};
    })
  }
  render(){
    const {pokedex,searchField} = this.state;
    const {OnSearchChange} = this;
    console.log('rendering');
    const filteredPokemon = pokedex.filter(pokemon=>{
      return pokemon.name.toLocaleLowerCase().includes(searchField);
    })

    return (
      <div className="App"> 
        <SearchBox 
          classname='search-box'
          onChangeHandler={OnSearchChange} 
          placeholder={'Search Pokemon'}
        />
        <CardList pokedex={filteredPokemon} />
      </div> 
    ); 
  }
}

export default App;
