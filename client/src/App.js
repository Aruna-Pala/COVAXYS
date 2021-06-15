import logo from './logo.svg';
import './App.css';
import {Route} from 'react-router-dom';
import Navigation from './components/navigationBar/Navigation';
import SignUp from './components/signup/SignUp';

function App() {
  return (
    <div className="App">
     <Navigation />
     <Route path="/signup">
        <SignUp />
      </Route>
    </div>
  );
}

export default App;
