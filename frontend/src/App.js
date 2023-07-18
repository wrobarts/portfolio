import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import Main from './pages/Main/Main';
import Project from './pages/Project/Project';
import './App.css';
import './colors.css';

function App() {
    return (
        <Router>
            <Route path="/" exact>
                <Main />
            </Route>
            <Route path="/project/:pid" exact>
                <Project />
            </Route>
            <Redirect to="/" />
        </Router>
    );
};

export default App;