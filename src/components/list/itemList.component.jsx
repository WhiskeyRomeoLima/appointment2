import React from 'react'
import Item from './item.component'

const ItemList = ({items}) => {
   
  return (
    <div>
       {items.map((member, index) => (
        <Item key={index} item={member} />
      ))}     
    </div>
  );
};

export default ItemList