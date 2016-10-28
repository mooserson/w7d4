import React from 'react';
import {withRouter} from 'react-router';

const Item = ({ item, router }) => {
  const handleClick = url => () => router.push(url);
  return (
    <li id="item-picture" onClick={handleClick(`/pokemon/${item.pokemon_id}/item/${item.id}`)}>
      <img src={item.image_url} onClick={handleClick}/>
    </li>
  );
};


export default withRouter(Item);
