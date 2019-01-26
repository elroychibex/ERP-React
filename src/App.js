import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import Login from './components/login';
import Signup from './components/signup';
import Dashboard from './components/dashboard';

class App extends Component {
  render() {
    return (
      <div>

        <Route exact path="/" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/dashboard" component={Dashboard} />
      
      </div>
    );
  }
}

export default App;
