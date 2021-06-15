import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Navigation from './components/navigationBar/Navigation';
import SignUp from './components/signup/SignUp';

function App() {
  return (
    <div className='App'>
      <Navigation />

      <Switch>
        <Route path='/signup'>
          <SignUp />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
        <Route path='/myaccount'>
          <MyAccount />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
