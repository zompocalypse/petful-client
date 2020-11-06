import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import LandingPage from '../LandingPage/LandingPage';
import AdoptMain from '../AdoptMain/AdoptMain';

export default class Root extends Component {
  render() {
    return (
      <main>
        <Route exact path={'/'} component={LandingPage} />
        <Route path={'/adopt'} component={AdoptMain} />
      </main>
    );
  }
}
