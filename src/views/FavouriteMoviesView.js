import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink, useRouteMatch } from 'react-router-dom';
import moviesSelectors from '../redux/movies/movies-selectors';
import MoviesList from '../components/MovieList';

export default function MoviesView() {
  const match = useRouteMatch();
  const favouriteMovies = useSelector(moviesSelectors.getFavouriteMovies);

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
