import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AppBar from './components/AppBar';
import Footer from './components/Footer';
import InTrendView from './views/InTrendView';
import MoviesView from './views/MoviesView';
import FavouriteMoviesView from './views/FavouriteMoviesView';
import QueueMoviesView from './views/QueueMoviesView';
import WatchedMoviesView from './views/WatchedMoviesView';
import MovieDetailsPageView from './views/MovieDetailsPageView';

export default function App() {
  return (
    <div className="page">
      <AppBar />

      <Switch>
        <Route exact path="/">
          <InTrendView />
        </Route>
        <Route exact path="/movies">
          <MoviesView />
        </Route>
        <Route exact path="/favourite">
          <FavouriteMoviesView />
        </Route>
        <Route exact path="/queue">
          <QueueMoviesView />
        </Route>
        <Route exact path="/watched">
          <WatchedMoviesView />
        </Route>

        <Route path="/movies/:movieId">
          <MovieDetailsPageView />
        </Route>
      </Switch>

      <Footer />
    </div>
  );
}
