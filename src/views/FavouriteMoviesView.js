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
  const favouriteMovies = useSelector(moviesSelectors.getFavouriteMovies);
  console.log(favouriteMovies);

  console.log(match);

  return (
    <main>
      <section className="section">
        <div className="container">
          <div className="nav-lib-container">
            <ul className="nav-lib__list">
              <li className="nav-lib__item">
                <NavLink
                  to={`${match.url}`}
                  className="nav-lib__link"
                  activeClassName="nav-lib__link--active"
                >
                  Favourite
                </NavLink>
              </li>
              <li className="nav-lib__item">
                <NavLink to="/queue" className="nav-lib__link">
                  Queue
                </NavLink>
              </li>
              <li className="nav-lib__item">
                <NavLink to="/watched" className="nav-lib__link">
                  Watched
                </NavLink>
              </li>
            </ul>
          </div>

          <MoviesList movies={favouriteMovies} />
        </div>
      </section>
    </main>
  );
}
