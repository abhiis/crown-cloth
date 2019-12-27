import React from 'react';
import { Route , Switch, Link} from 'react-router-dom';
import HomePage from './pages/homepage.component';
import './App.css';

const Abhishek = () =>(
  <div>
    <h1>Abhishek Srivastava</h1>
    <Link to='/'>Home</Link>
  </div>
)
function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage}></Route>
      <Route exact path='/New' component={Abhishek}></Route>
      </Switch>
      
    </div>
  );
}

export default App;
