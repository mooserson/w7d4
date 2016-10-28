import {RECEIVE_ALL_POKEMON, RECEIVE_NEW_POKEMON} from '../actions/pokemon_actions';
import merge from 'lodash/merge';

const PokemonReducer = (state={}, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_ALL_POKEMON:
      return action.pokemon;
    case RECEIVE_NEW_POKEMON:
      return merge({},state,{[action.pokemon.id]: action.pokemon});
    default:
      return state;
  }
};


export default PokemonReducer;
