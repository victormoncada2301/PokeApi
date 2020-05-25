import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import Searchbar from './Components/Searchbar';
import PokemonGrid from './Components/PokemonGrid';
import PokemonPage from './Components/PokemonPage';
import {Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={PokemonPage}/>
      </div>
    );
  }
}

export default App;
