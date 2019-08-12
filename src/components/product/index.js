import React from 'react';
import './index.css';


function Product(props) {
  return (
    <div className="container">
    {
      props.products &&
        props.products.map( product =>
          <div className="card">
          <img className="card-img" src="http://placehold.it/70x70" alt="placeholder" />
          <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-price">${product.price}</p>
          <p className="card-text">{product.description}</p>
          <a onClick={() => {props.addToCart(product.id)}} className="btn btn-primary">Add to Cart</a>
          </div>
          </div>
        )
    }
    </div>
  );
}

export default Product;
