import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch, Route, NavLink, useLocation, useRouteMatch } from 'react-router-dom';
import moviesOperations from '../redux/movies/movies-operations';
import moviesSelectors from '../redux/movies/movies-selectors';
import moviesActions from '../redux/movies/movies-actions';
import MoviesList from '../components/MovieList';
import Navigation from '../components/AppBar/Navigation';
import SearchForm from '../components/SearchForm';
import Cast from '../components/Cast';

export default function MoviesView() {
  const dispatch = useDispatch();
  const location = useLocation();
  const match = useRouteMatch();
  const watchedMovies = useSelector(moviesSelectors.getWatchedMovies);

  console.log(match);

  return (
    <main>
      <section className="section">
        <div className="container">
          <ul>
            <li>
              <NavLink to="/favourite">Favourite</NavLink>
            </li>
            <li>
              <NavLink to="/queue">Queue</NavLink>
            </li>
            <li>
              <NavLink to={`${match.url}`}>Watched</NavLink>
            </li>
          </ul>

          <MoviesList movies={watchedMovies} />
        </div>
      </section>
    </main>
  );
}
