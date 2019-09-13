import React, { Component } from 'react';
import { fetchList } from '../../../helper/services/PokemonService';

export default function withDataPokemon(WrappedComponent) {
  return class HoCPokemon extends Component {
    state = {
      isFetching: false,
      pokemons: []
    }

    fetchPokemon = async () => {
      try {
        const data = await fetchList();
        this.setState({ pokemons: data.results, isFetching: false })
      } catch (error) {
        console.log(error)
        this.setState({ isFetching: false })
      }
    }

    componentDidMount() {
      this.setState({
        isFetching: true
      }, () => {
        this.fetchPokemon()
      })
    }

    render() {
      return <WrappedComponent {...this.state} />
    }

  }
}