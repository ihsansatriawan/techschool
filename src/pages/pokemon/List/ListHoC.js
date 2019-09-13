import React, { Component, Fragment } from 'react';
import CardPokemon from '../../../component/CardPokemon';
import WithData from './withDataPokemon';

class ListContainerHoC extends Component {

  handleClickDetail = (data) => {
    console.log("handleClickCard: ", data)
  }

  render() {
    const { pokemons, isFetching } = this.props;
    return (<Fragment>
      <h1>List Pokemon HoC</h1>
      {isFetching ? <h1>Loading</h1> : <CardPokemon pokemon={pokemons} handleClickDetail={this.handleClickDetail} />}
    </Fragment>)
  }
}

export default WithData(ListContainerHoC);