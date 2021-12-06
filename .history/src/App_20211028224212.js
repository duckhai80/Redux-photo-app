import logo from './logo.svg';
import './App.css';

import React, { Suspense } from 'react';
import { BrowserRouter, Route, Switch, Redirect, Link } from 'react-router-dom';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import NotFound from './components/NotFound';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;




// Lazy load - Code splitting
function App() {
    <div className="photo-app">
      <Suspense fallback={<div>Loading ...</div>}>
        <BrowserRouter>


          <ul>
            <li><Link to="/photos">Go to photo page</Link></li>
            <li><Link to="/photos/add">Go to Add new photo page</Link></li>
            <li><Link to="/photos/123">Go to Edit photo page</Link></li>
          </ul>
          <Header />

          <Switch>
            <Redirect exact from="/" to="/photos" />