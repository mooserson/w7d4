import React from 'react';
import {withRouter} from 'react-router';

const ItemDetail = props => {
  if (props.itemDetail) {
    return (
      <div>
        {props.itemDetail.name}
        {props.itemDetail.happiness}
      </div>
    );
  }
  return(<div></div>);
};

export default withRouter(ItemDetail);
