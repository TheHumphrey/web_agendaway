import React from "react";
import "./App.css";

import Login from "./pages/Login";
import Home from "./pages/Home";
import store from './store'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from "react-redux";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Route exact path='/' component={Login} />
        <Route exact path='/home' component={Home} />
      </Router>
    </Provider>
  );
};

export default App;