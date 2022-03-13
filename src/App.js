import {SearchBox} from './Components/search-box/search-box.component';
import './App.css';
// import React, {Component} from 'react';
import {CardList} from './Components/card-list/card-list.Components'
import { useState,useEffect } from 'react';
const App = () => {
  const [searchField,setSearchField] = useState('');
  const [pokedex,setPokedex] = useState([]);
  const [title,setTitle] = useState('');
  const [filteredPokemon,setFilteredPokemon] = useState (pokedex);
  console.log('render');
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => setPokedex(users));
  },[])

  useEffect(()=>{
    const newfilteredPokemon = pokedex.filter(pokemon=>{
      return pokemon.name.toLocaleLowerCase().includes(searchField);
    })
    setFilteredPokemon(newfilteredPokemon);
  },[pokedex,searchField])

  

  const OnSearchChange = (e) => {
    const searchFieldString = e.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  }
  const OnTitleChange = (e) => {
    const titleFieldString = e.target.value;
    setTitle(titleFieldString);
  }
  useEffect(()=>{
    setTitle(title);
    console.log(title);
  },[title])
  
  return (
    <div className="App"> 
      <h1 className='Title'>{title}</h1>
      <SearchBox 
        classname={'search-box'}
        onChangeHandler={OnSearchChange} 
        placeholder={'Search Pokemon'}
      />
      <br></br>
      <SearchBox 
        classname={'search-box'}
        onChangeHandler={OnTitleChange} 
        placeholder={'Search Title'}
      />
     <CardList pokedex={filteredPokemon} />
    </div> 
  );
}

// class App extends Component{
// //   constructor(){
// //     super();
// //     this.state = {
// //       pokedex:[],
// //       searchField:''
// //     };
// //   }
  
// //   componentDidMount(){
    
// //   }
// //   //<button onClick = {()=> this.setState({string : 'Hello Broo'})}></button>
//   render(){
//     return(
//       <Apps></Apps>
//     );
// //     // const {pokedex,searchField} = this.state;
// //     // const {OnSearchChange} = this;
// //     // console.log('rendering');
    
//   }
// }

export default App;
