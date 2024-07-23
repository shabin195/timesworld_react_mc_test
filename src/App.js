import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import login from '../src/user/login';
import profile from '../src/user/profile';

const App = () => {
  return (
    <Router>
      <Route exact path="/" component={login} />
      <Route exact path="/profile" component={profile} />
    </Router>
  );
};

export default App;