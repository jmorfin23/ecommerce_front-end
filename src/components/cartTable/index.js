import React from 'react';
import './index.css';
import CartItem from '../cartItem';

function CartTable(props) {


  return (
    <div className="carttable">
      <table className="table-dark table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Price</th>
            <th>Description</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
        {
          props.carts &&
            props.carts.map( cart => <CartItem cart={cart} key={cart.id} deleteFromCart={props.deleteFromCart}/>
            )
        }
        </tbody>
      </table>
    </div>
  );
}

export default CartTable;
