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
import './viewsStyles/LibraryView.scss';

export default function MoviesView() {
  const dispatch = useDispatch();
  const location = useLocation();
  const match = useRouteMatch();
  const queueMovies = useSelector(moviesSelectors.getQueueMovies);

  console.log(match);

  return (
    <main>
      <section className="section">
        <div className="container">
          <div className="nav-lib-container">
            <ul className="nav-lib__list">
              <li className="nav-lib__item">
                <NavLink to="/favourite" className="nav-lib__link">
                  Favourite
                </NavLink>
              </li>
              <li className="nav-lib__item">
                <NavLink
                  to={`${match.url}`}
                  className="nav-lib__link"
                  activeClassName="nav-lib__link--active"
                >
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

          <MoviesList movies={queueMovies} />
        </div>
      </section>
    </main>
  );
}
