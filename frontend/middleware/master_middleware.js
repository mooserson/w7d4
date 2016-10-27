import PokemonMiddleware from './pokemon_middleware';
import {applyMiddleware} from 'redux';

const MasterMiddleware = applyMiddleware(PokemonMiddleware);
export default MasterMiddleware;
