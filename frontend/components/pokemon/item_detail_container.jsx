import {connect} from 'react-redux';
import ItemDetail from './item_detail';

const selectPokemonItem = (state, itemId) => {
  for (var i = 0; i < state.pokemonDetail.items.length; i++) {
    if (state.pokemonDetail.items[i].id === itemId) {
      return state.pokemonDetail.items[i];
    }
  }
};

export const mapStateToProps = (state,ownProps) => ({
  itemDetail: selectPokemonItem(state,ownProps.params.itemId)
});

export default connect(
  mapStateToProps
)(ItemDetail);
