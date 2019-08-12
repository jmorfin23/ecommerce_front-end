import React from 'react';
import './index.css';
import ProductItem from '../productItem';


function ProductTable(props) {

  return (
    <div className="productTable">
      <table className="table-dark table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Price</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
      {
        props.products &&
          props.products.map(product => <ProductItem
            product={product} key={product.id}
            />
          )
      }
      </tbody>
      </table>
    </div>
  );
}
export default ProductTable;
