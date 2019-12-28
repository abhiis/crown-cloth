import React from 'react';
import { Route , Switch} from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shoppage.component'
import SignInSignUp from './pages/sing-in-and-sign-up/sign-in-sign-up.component';
import Header from './components/header/header.component';
import './App.css';

function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={HomePage}></Route>
      <Route exact path='/shop' component={ShopPage}></Route>
      <Route exact path='/signin' component={SignInSignUp}></Route>
      </Switch>
      
    </div>
  );
}

export default App;
