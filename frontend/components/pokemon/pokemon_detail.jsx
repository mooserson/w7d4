import React from 'react';
import {withRouter} from 'react-router';
import Item from './item';

const PokemonDetail = props => {
  var tempp = [];
  if (props.pokemonDetail.items){
    tempp = props.pokemonDetail.items.map((item) => (
      <img key={item.id} src={item.image_url} />
    ));
  }

  return (
    <div>
      {props.pokemonDetail.name}

      <section className="items">
      <h3>Items</h3>
			<ul className="item-list">
				{props.pokemonDetail.items.map((item) => <Item key={item.name} item={item}/>)}
			</ul>
		  </section>

      {props.children}
    </div>
  );
};

export default withRouter(PokemonDetail);
