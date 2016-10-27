import {connect} from 'react-redux';
import PokemonDetail from './pokemon_detail';

const mapStateToProps = state => ({
  pokemonDetail: state.pokemonDetail
});

const mapDispatchToProps = () => ({

});

export default connect(
  mapStateToProps
)(PokemonDetail);
