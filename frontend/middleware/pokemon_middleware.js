import {fetchAllPokemon, fetchPokemon, createPokemon} from '../util/api_util';
import {REQUEST_ALL_POKEMON, REQUEST_POKEMON, CREATE_POKEMON, RECEIVE_ERRORS, receiveAllPokemon, receivePokemon, receiveNewPokemon,receivePokemonErrors} from '../actions/pokemon_actions';
import { hashHistory } from 'react-router';

const PokemonMiddleware = ({dispatch}) => next => action => {
  const receiveAllPokemonSuccess = data => dispatch(receiveAllPokemon(data));
  const receivePokemonSuccess = data => dispatch(receivePokemon(data));
  const receiveNewPokemonSuccess = pokemon => {
    dispatch(receiveNewPokemon(pokemon));
    hashHistory.push(`/pokemon/${pokemon.id}`);
  };
  const receiveNewPokemonErrors = errors => {
    dispatch(receivePokemonErrors(errors.responseJSON));
  };

  switch (action.type) {
    case REQUEST_ALL_POKEMON:
      fetchAllPokemon(receiveAllPokemonSuccess);
      return next(action);

    case REQUEST_POKEMON:
      fetchPokemon(action.id,receivePokemonSuccess);
      return next(action);

    case CREATE_POKEMON:
      createPokemon(action.pokemon,receiveNewPokemonSuccess,receiveNewPokemonErrors);
      return next(action);

    default:
      return next(action);
  }
};

export default PokemonMiddleware;
