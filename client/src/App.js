import React from "react";
import { BrowserRouter as Router, Route, Switch, NavLink } from "react-router-dom";

import Login from "./components/Login";
import BubblePage from './components/BubblePage';
import PrivateRoute from './components/PrivateRoute';
import "./styles.scss";

function App() {

  return (
    <>
    <Router>
      <nav>
        <div className='nav-links'>
        <NavLink exact to='/login'>
          Login
        </NavLink>
        </div>
      </nav>
    
      <Switch>
        <Route path='/login' component={Login} />
        <PrivateRoute exactpath='/bubble-page' component={BubblePage} />
        <Route path='/' component={Login} />
      </Switch>
    </Router>
    </>
  );
}

export default App;
