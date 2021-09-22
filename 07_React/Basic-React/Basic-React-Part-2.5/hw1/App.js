import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import SignUp from './components/SignUp';

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route exact path='/signup' component={SignUp} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
