import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './header'
import Footer from './footer'
import CreateProfile from './createProfile';
import DeleteProfile from './DeleteProfile'
import ColorPage from './ColorPage';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomePage from './Home'


function App() {

  return (
    <Router>
      <div className="App">
        <header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/createrPofile" component={CreateProfile} />
          <Route path="/DeleteProfile" component={DeleteProfile} />
          <Route path="/ColorPage" component={ColorPage} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}


export default App
