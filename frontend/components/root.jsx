import React from 'react';
import { Provider } from 'react-redux';
import PokemonIndexContainer from './pokemon/pokemon_index_container';
import PokemonDetailContainer from './pokemon/pokemon_detail_container';
import ItemDetailContainer from './pokemon/item_detail_container';
import { Router, Route, hashHistory } from 'react-router';
import {requestAllPokemon, requestPokemon} from '../actions/pokemon_actions';


const Root = ({ store }) => {
  const requestOnEnter = () => {
    store.dispatch(requestAllPokemon());
  };

  const requestSinglePokemon = (nextState) =>{
    store.dispatch(requestPokemon(nextState.params.pokemonId));
  };

  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={PokemonIndexContainer} onEnter={requestOnEnter}>
          <Route path="pokemon/:pokemonId" component={PokemonDetailContainer} onEnter={requestSinglePokemon}>
            <Route path="item/:itemId" component={ItemDetailContainer} />
          </Route>
        </Route>
      </Router>
    </Provider>
  );
};
// <PokemonIndexContainer />

export default Root;
