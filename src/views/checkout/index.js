import React, {Component} from 'react';
import './index.css';
import CartTable from '../../components/cartTable';
import Products from '../products';

class Checkout extends Component {
  render() {
  return (
    <div className="checkout">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <CartTable />
        </div>
      </div>
    </div>
  );
}
}

export default Checkout;
