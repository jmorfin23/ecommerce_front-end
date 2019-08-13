import React, {Component} from 'react';
import './index.css';
import Product from '../../components/product';
import CartTable from '../../components/cartTable';




class Products extends Component {

  constructor() {
    super();

    this.state = {
    'product': [],
    'cart': []
    }
  }

      getData = async() => {

    let URL = 'http://localhost:5000/api/retrieve';

    let response = await fetch(URL);

    let data = await response.json();

    if (data.success.products) {
        let product = data.success.products;

        //setting state for products
        this.setState({ product });
    }
  }

  displayCart = async() => {
    console.log('inside display cart');

    let URL = 'http://localhost:5000/api/retrieved';

    let response = await fetch(URL);

    let data = await response.json();

    data = data.Success.cart
    // update the state.

    this.setState({ 'cart': data})
  }

  componentDidMount() {
    this.getData();
    this.displayCart();

  }

  addToCart = async(id) => {

    let title= ''
    let price= 0
    let description = ''

    let prod = this.state.product;
    for (let i in prod) {
      if (id == prod[i]['id']) {

        title = prod[i]['title'];
        price = prod[i]['price'];
        description = prod[i]['description'];
        break;
      }
    }
    let URL = 'http://localhost:5000/api/saved';

    let response = await fetch(URL, {
      'method': 'POST',
      'headers': {
      'title': title,
      'price': price,
      'description': description
      }
    });

    let data = await response.json();

    data = data.Success.cart
    //update the state for cart to send in to cartTable:
    this.setState({ 'cart': data})
  }


  deleteFromCart = async(id) => {

    let URL = 'http://localhost:5000/api/deleted';

    let response = await fetch(URL, {
      'method': 'DELETE',
      'headers': {
      'id': id
      }
    });

    let data = await response.json();

    console.log(data);

    this.componentDidMount()
  }

  render() {
  return (
    <div className="row">
      <div className="col-md-8">
      <Product products={this.state.product} addToCart={this.addToCart}/>
      </div>
      <div className="col-md-4">
        <CartTable carts={this.state.cart} deleteFromCart={this.deleteFromCart}/>
      </div>
    </div>
  );
}
}

export default Products;
