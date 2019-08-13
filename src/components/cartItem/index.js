import React from 'react';
import './index.css';



function CartItem(props) {
  return (
        <tr>
          <td>{props.cart.id}</td>
          <td>{props.cart.title}</td>
          <td>${props.cart.price}</td>
          <td>{props.cart.description}</td>
          <td onClick={() => {props.deleteFromCart(props.cart.id)}} className="remove">X</td>
        </tr>

  );
}
export default CartItem;
