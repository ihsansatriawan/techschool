import React, { Component, Fragment } from 'react';
import CardPokemon from '../../../component/CardPokemon';
import RenderPropsPokemon from './withRenderPropsPokemon';

class ListRenderProps extends Component {

  handleClickDetail = (data) => {
    console.log("handleClickCard: ", data)
  }

  renderContent = ({ isFetching, pokemons }) => {
    return <Fragment>
      {isFetching ? <h1>Loading</h1> : <CardPokemon pokemon={pokemons} handleClickDetail={this.handleClickDetail} />}
    </Fragment>
  }

  render() {

    return (<Fragment>
      <h1>List Pokemon RenderProps</h1>
      <RenderPropsPokemon>{this.renderContent}</RenderPropsPokemon>
    </Fragment>)
  }
}

export default (ListRenderProps);