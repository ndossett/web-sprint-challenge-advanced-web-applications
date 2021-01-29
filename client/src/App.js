import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Login from "./components/Login";
import BubblePage from './components/BubblePage';
import PrivateRoute from './components/PrivateRoute';
import "./styles.scss";

function App() {

  return (
    <Router>
      <Switch>
        <PrivateRoute exactpath='/bubble-page' component={BubblePage}/>
        <Route path='/login' component={Login} />
        <Route path='/' component={Login} />
      </Switch>
    </Router>
  );
}

export default App;
