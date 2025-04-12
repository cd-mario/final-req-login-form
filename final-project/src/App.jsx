
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './index.css'
import Home from './Home.jsx'
import Signup from './components/Signup.jsx'
import Login from './components/Login.jsx'
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:8000'
axios.defaults.withCredentials = true

const App = () => {
    return ( 
        <Router>
            <Switch>
                <Route path="/" exact>
                    <Signup />
                </Route>
                <Route path="/home">
                    <Home />
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
            </Switch>
        </Router>
     );
}
 
export default App;