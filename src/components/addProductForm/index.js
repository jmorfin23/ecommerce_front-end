import React from 'react';
import './index.css';


function AddProductForm(props) {
  return (
    <div className="addproductform">
          <form onSubmit={props.addProduct}>
            <div className="form-group">
              <label>Title</label>
              <input type="text" className="form-control" name="title" />
            </div>
            <div className="form-group">
              <label>Price</label>
              <input type="number" className="form-control" name="price" />
            </div>
            <div className="form-group">
              <label>Description</label>
              <input type="text" className="form-control" name="description" />
            </div>
            <button type="submit" className="btn btn-primary" name="submit">Add Product</button>
          </form>
          <button onClick={props.getData} type="submit" className="btn btn-primary" name="submit">See products</button>
    </div>
  );
}
export default AddProductForm;
