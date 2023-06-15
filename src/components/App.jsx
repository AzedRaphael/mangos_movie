import React from 'react';
import { CssBaseline } from '@mui/material';
import { Route, Switch } from 'react-router-dom';
import MovieInformation from './MovieInformation/MovieInformation';
import Profile from './Profile/Profile';
import { Actors, Movies, Navbar } from '.';

const App = () => (
  <div>
    <CssBaseline />
    <Navbar />
    <main>
      <Switch>
        <Route exact path="/">
          <Movies />
        </Route>
        <Route exact path="/movies/:id">
          <MovieInformation />
        </Route>
        <Route exact path="/actors/:id">
          <Actors />
        </Route>
        <Route exact path="/profile">
          <Profile />
        </Route>
      </Switch>
    </main>
  </div>
);

export default App;
