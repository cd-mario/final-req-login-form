import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './index.css'
import Home from './Home.jsx'
import Signup from './components/Signup.jsx'
import Login from './components/Login.jsx'

createRoot(document.getElementById('root')).render(
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </Router>
)
