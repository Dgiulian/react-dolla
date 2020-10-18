import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import HomePage from './pages/home';
import SignInPage from './pages/signin';
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/signin" exact component={SignInPage} />
        <Route path="/" exact component={HomePage} />
      </Switch>
    </Router>
  );
}

export default App;
