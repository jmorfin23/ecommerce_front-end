import React from 'react';
import './index.css';
import {NavLink} from 'react-router-dom';


function Header() {
  return (
    <div className="Header">
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

  <NavLink className="navbar-brand" to="/">Products</NavLink>

  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <NavLink className="nav-link" to="/checkout">Checkout</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/inventory">Inventory</NavLink>
      </li>
    </ul>
  </div>
</nav>
    </div>
  );
}

export default Header;
