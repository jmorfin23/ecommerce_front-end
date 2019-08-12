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
    console.log('inside deleteFromCart');
  }

  render() {
  return (
    <div className="row">
      <div className="col-md-8">
      <button onClick={this.getData} type="submit" className="btn btn-primary" name="submit">See products</button>
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
