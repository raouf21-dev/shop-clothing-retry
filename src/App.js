import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import HomePage from "./pages/homePage";

const hats = () => {
  return <h1>HATS PAGE</h1>
}

function App() {
  return (
    <div>
      <Switch>
      <Route exact path="/" component={HomePage}/>
      <Route path="/shop/hats" component={hats}/>
      </Switch>
    </div>
  );
}

export default App;
