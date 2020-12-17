import React from "react";
import "./App.css";

import Login from "./pages/Login";
import Home from "./pages/Home";
<<<<<<< HEAD
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
=======
import New from "./pages/New";

const App = () => {
  return (
    <div className="App">
      <New />
    </div>
>>>>>>> 5522689df9ad97f12e41b05d85feb443e7af8497
  );
};

export default App;
