import React from 'react';
import {withRouter} from 'react-router';

const ItemDetail = props => {
  return (
    <div>
      {props.itemDetail.name}
      {props.itemDetail.happiness}
    </div>
  );
};

export default withRouter(ItemDetail);
