import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import SignIn from './components/SignIn';

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route exact path="/signin" component={SignIn} />
                </Switch>
            </Router>
        </div>
    );
};

export default App;
