import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AppBar from './components/AppBar';
import InTrendView from './views/InTrendView';
import MoviesView from './views/MoviesView';
import MovieDetailsPage from './views/MovieDetailsPage';

export default function App() {
  return (
    <>
      <AppBar />
      <Switch>
        <Route exact path="/movies/:movieId">
          <MovieDetailsPage />
        </Route>
        <Route exact path="/movies">
          <MoviesView />
        </Route>
        <Route>
          <InTrendView exact path="/" />
        </Route>
      </Switch>
    </>
  );
}
