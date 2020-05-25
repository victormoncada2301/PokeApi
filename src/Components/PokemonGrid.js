import React, {Component} from 'react';
import axios from 'axios';
import {getPokemonList} from '../Actions/PokemonActions';

class PokemonGrid extends Component {
  constructor(props) {
    super(props)
    props.dispatch(getPokemonList());
  }
  renderPokemon() {
    var pokemonList = this.props.PokemonReducer.pokemonList;
    return pokemonList.map((pokemon) => {
      const value = pokemon.url;
      const parts = value.split('/');
      const picId = parts[6];
      const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${picId}.png`
        if (this.props.PokemonReducer.searchedPokemon === '')
          return (
            <div key={picId} className="poke-card">
              <p>{pokemon.name}</p>
              <img className="pokemon-pic" alt="" src={url}/>
            </div>
          )
        else if (this.props.PokemonReducer.searchedPokemon.toLowerCase() === pokemon.name) {
          return (
            <div key={picId} className="poke-card">
              <p>{pokemon.name}</p>
              <img className="pokemon-pic" alt="" src={url}/>
            </div>
          )
        }
      }
    );
  }

  render() {
    return (
      <div className="pokemon-grid">
        { this.renderPokemon() }
      </div>
    )
  }
}

export default PokemonGrid;