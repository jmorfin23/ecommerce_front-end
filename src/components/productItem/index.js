import React from 'react';
import './index.css';

function ProductItem(props) {
  return (
      <tr>
        <td>{props.product.id}</td>
        <td>{props.product.title}</td>
        <td>{props.product.price}</td>
        <td>{props.product.description}</td> 
      </tr>
  );

}
export default ProductItem;
