import {connect} from 'react-redux';
import {createPokemon} from '../../actions/pokemon_actions';
import PokemonForm from './pokemon_form';


export const mapStateToProps = (state) => ({
  errors: state.errors
});

export const mapDispatchToProps = (dispatch) => ({
  createPokemon: (pokemon) => dispatch(createPokemon(pokemon))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonForm);
