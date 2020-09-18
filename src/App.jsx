import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import logo from './elogos';
import './styles.css';

import HomePage from './pages/homepage/homepage.component'
import AboutPage from './pages/about/about.component'

const App = () => {
  return (
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/about' component={AboutPage} />
    </Switch>
  )
}

export default App
