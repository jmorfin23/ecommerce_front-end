import React from 'react';
import './index.css';


function RemoveProductForm(props) {
  return (
    <div className="addproductform">
          <form onSubmit={props.removeProduct}>
            <div className="form-group">
              <label>ID</label>
              <input type="number" className="form-control" name="id" />
            </div>
            <button type="submit" className="btn btn-primary" name="submit">Remove Product</button>
          </form>
    </div>
  );
}
export default RemoveProductForm;
