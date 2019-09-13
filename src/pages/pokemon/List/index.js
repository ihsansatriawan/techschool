import React, { Component, Fragment } from 'react';
import { fetchList } from '../../../helper/services/PokemonService';
import CardPokemon from '../../../component/CardPokemon';

class ListContainer extends Component {

  state = {
    pokemon: []
  }

  handleClickDetail = (data) => {
    console.log("handleClickCard: ", data)
  }

  componentDidMount = async () => {
    const data = await fetchList();
    this.setState({ pokemon: data.results })
  }

  render() {
    const { pokemon } = this.state;

    return (<Fragment>
      <h1>List Pokemon</h1>
      {<CardPokemon pokemon={pokemon} handleClickDetail={this.handleClickDetail} />}
    </Fragment>)
  }
}

export default ListContainer;