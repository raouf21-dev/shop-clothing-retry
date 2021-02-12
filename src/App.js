import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import HomePage from "./pages/homePage";
import ShopePage from './pages/shop/shop';

function App() {
  return (
    <div>
      <Switch>
      <Route exact path="/" component={HomePage}/>
      <Route path="/shop" component={ShopePage}/>
      </Switch>
    </div>
  );
}

export default App;
