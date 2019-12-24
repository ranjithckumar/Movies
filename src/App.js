import React from "react";
import {CardList} from './components/card-list/card-list.component';
import {SearchBox, AddMovies} from './components/search-box/search-box.component';
import "./App.css";

class App extends React.Component{
  constructor(){
    super();
    // state gets changed due to user actions
    this.state={
      movies:[
        {
          id: 1,
          name: 'KGF',
          year: 2019,
          actor: 'Yash',
          rating:'9'
        },
        {
          id: 2,
          name: 'Warrior',
          year: 2014,
          actor: 'Traversy',
          rating:'8.6'
        },
        {
          id: 3,
          name: 'Scorpoin',
          year: 2009,
          actor: 'Steve',
          rating:'9.1'
        },
        {
          id: 4,
          name: 'Arrow',
          year: 2015,
          actor: 'John karvo',
          rating:'7.3'
        },
        {
          id: 5,
          name: 'Last Ship',
          year: 2019,
          actor: 'Clark',
          rating:'7.5'
        },
        {
          id: 6,
          name: '24',
          year: 2016,
          actor: 'Surya',
          rating:'6.5'
        },
        {
          id: 7,
          name: 'BattleShip',
          year: 2010,
          actor: 'Captain Smith',
          rating:'8.9'
        },
        {
          id: 8,
          name: 'GOT',
          year: 2014,
          actor: 'JohnSnow,Arya,Emilia',
          rating:'8.1'
        }
        
      ],
      searchField:''
    };
  }

  handleChange=(e)=>{
    this.setState({searchField:e.target.value});
  }
  render(){
    // by applying filter, we checking  wether the search value(searchField) is present in state(movies) 
    const {movies,searchField}=this.state;
    const filteredmovies= movies.filter(movies=>
      movies.name.toLowerCase().includes(searchField.toLowerCase())
      );
    return (
      <div className="App">
        <h1>Search Movies</h1>
        {/* Using search value here we updating searchField state  and passing props(placeholder,handleChange) 
        to SeachBox component*/}
        <SearchBox
           placeholder="Search movies"
           handleChange={this.handleChange}
        />
         <div className='movie'>
         <AddMovies
           placeholder="Add movies"
           handleChange={this.handleChange}
        />
      </div>
      <div className='movie'>
         <AddMovies
           placeholder="Edit movies"
           handleChange={this.handleChange}
        />
      </div>
        {/* here we calling CardList component by passing state(movies) as props */}
        <CardList movies={filteredmovies}/>
      </div>
     
    );
  }
}

export default App;
