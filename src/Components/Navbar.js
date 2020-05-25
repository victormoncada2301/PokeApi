import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <div className="navbar"> 
        <ul className="navlist">
          <img src={require('../stylesheet/pokeapi.png')} width='150px'/>
          <a href="https://github.com/victormoncada2301/PokeApi" className="favorites-tab">GitHub</a>
        </ul>
      <div> 
        <ul className="navlist">
          <span className="login">Victor Moncada</span>
        </ul>
      </div>
      </div>
    )
  }
}

export default Navbar;