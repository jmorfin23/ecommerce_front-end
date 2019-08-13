import React, {Component} from 'react';
import './index.css';
import AddProductForm from '../../components/addProductForm';
import RemoveProductForm from '../../components/removeProductForm';
import ProductTable from '../../components/productTable';


class Inventory extends Component {
  constructor() {
    super();

    this.state = {
      'product': []
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

    } else {
      alert('No products')
    }
  }
  componentDidMount() {
    this.getData(); 
  }

  addProduct = async(e) => {
    //preventing a refresh
    e.preventDefault();

    let title = e.target.elements.title.value;
    let price = e.target.elements.price.value;
    let description = e.target.elements.description.value;

    let URL = 'http://localhost:5000/api/save';

    let response = await fetch(URL, {
      'method': 'POST',
      'headers': {
      'title': title,
      'price': price,
      'description': description
      }
    });
    let data = await response.json();

    alert('Product was sucessfully added.')
    //TODO: finsh
  }


  removeProduct = async(e) => {
    //preventing a resfresh
    e.preventDefault();

    let id = e.target.elements.id.value;

    let URL = 'http://localhost:5000/api/delete';

    let response = await fetch(URL, {
      'method': 'DELETE',
      'headers': {
      'id': id
      }
    });
    let data = await response.json();
    alert('Product was sucessfully removed.')
  }

  render() {
  return (
    <div className="inventory">
      <div className="row">
        <div className="col-md-4 offset-md-4">
        <h1 className="centered">Add a Product</h1>
          <AddProductForm addProduct={this.addProduct} getData={this.getData}/>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 offset-md-4">
        <h1 className="centered">Remove a Product</h1>
          <RemoveProductForm removeProduct={this.removeProduct}/>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 offset-md-3 centered">
          <ProductTable products={this.state.product}/>
        </div>
      </div>
    </div>
  );
}
}

export default Inventory;
