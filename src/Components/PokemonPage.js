import React, { Component } from 'react';
import Navbar from './Navbar';
import Searchbar from './Searchbar';
import PokemonGrid from './PokemonGrid';
import {connect} from 'react-redux';

class PokemonPage extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return(
            <div> 
                <Navbar/>
                <Searchbar {...this.props}/>
                <PokemonGrid {...this.props} />      
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        PokemonReducer: state.PokemonReducer
    }
}

export default connect(mapStateToProps)(PokemonPage);