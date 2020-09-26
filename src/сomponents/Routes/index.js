import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../Home';
import About from '../About';


const Routes = () => (
  <Switch>
    <Route exact path={'/'} component={Home}/>
    <Route path={'/'} component={About}/>
  </Switch>
);

export default Routes;