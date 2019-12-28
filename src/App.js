import React from 'react';
import { Route , Switch} from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shoppage.component'
import SignInSignUp from './pages/sing-in-and-sign-up/sign-in-sign-up.component';
import Header from './components/header/header.component';
import {auth} from './firebase/firebase.utils';
import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      currentUser: null
    }
  };
  unsubscribefromAuth = null;
  componentDidMount(){
    this.unsubscribefromAuth = auth.onAuthStateChanged( user => {
      this.setState({currentUser: user});
    });
  }
  componentWillUnmount(){
    this.unsubscribefromAuth(); 
  };

  render(){
     return (
    <div>
      <Header currentUser={ this.state.currentUser }/>
      <Switch>
        <Route exact path='/' component={HomePage}></Route>
      <Route exact path='/shop' component={ShopPage}></Route>
      <Route exact path='/signin' component={SignInSignUp}></Route>
      </Switch>
      
    </div>
  );
  }
 
}

export default App;
