import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import HomePage from "./pages/homePage";
import ShopePage from './pages/shop/shop';
import Header from './header/header';
import SignInAndSignUp from './components/sign-in-sign-up/sign-in-sign-up';
import { auth } from './firebase/firebase.utils';
import './App.css';

class  App extends Component {
  constructor(){
    super();

    this.state = {
      currentUser: null
    }
  }

  unSubscribeFromAuth = null;

  componentDidMount(){
    this.unSubscribeFromAuth =  auth.onAuthStateChanged(user => {
      this.setState({
        currentUser: user
      })
      console.log(user);
    })
  }

  componentWillUnmount(){
    this.unSubscribeFromAuth();
  }

  render(){

    return (
      <div>
      
      <Header currentUser={this.state.currentUser}/>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route path="/shop" component={ShopePage}/>
        <Route path="/signin" component={SignInAndSignUp}/>
      </Switch>
    </div>
  );
}
}

export default App;
