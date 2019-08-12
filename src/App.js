import React from 'react';
import './index.css';
import { Switch, Route } from 'react-router-dom';
import Header from './components/header';
import Products from './views/products';
import Inventory from './views/inventory'
import Checkout from './views/checkout'

function App() {
  return (
    <div className="App">
    <Header />
    <Switch>
    <Route exact path='/' render={() => <Products  />} />
    <Route exact path='/inventory' render={() => <Inventory />} />
    <Route exact path='/checkout' render={() => <Checkout />} />
    </Switch>
    </div>
  );
}

export default App;
