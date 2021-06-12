import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Route,
  Switch,
  NavLink,
  useParams,
  useLocation,
  useHistory,
  useRouteMatch,
} from 'react-router-dom';
import moviesOperations from '../redux/movies/movies-operations';
import moviesSelectors from '../redux/movies/movies-selectors';
import moviesActions from '../redux/movies/movies-actions';
import Cast from '../components/Cast';
import Review from '../components/Review';
import MovieImages from '../components/MovieImages';
import MoviesList from '../components/MovieList';

export default function MovieDetailsPage() {
  const dispatch = useDispatch();
  const {
    id,
    title,
    overview,
    genres,
    poster_path,
    vote_average,
    runtime,
    release_date,
  } = useSelector(moviesSelectors.getMovieDetails);
  const favouriteMovies = useSelector(moviesSelectors.getFavouriteMovies);
  const queueMovies = useSelector(moviesSelectors.getQueueMovies);
  const watchedMovies = useSelector(moviesSelectors.getWatchedMovies);
  const movie = useSelector(moviesSelectors.getMovieDetails);
  console.log(movie);

  const history = useHistory();
  const params = useParams();
  const location = useLocation();
  const match = useRouteMatch();

  const movieId = params.movieId;

  console.log(location);

  useEffect(() => {
    dispatch(moviesOperations.fetchMovieDetails(movieId));
  }, [dispatch, movieId]);

  const handleGoBack = () => {
    if (location.state) {
      return history.push(location.state);
    }

    history.push('/');
  };

  return (
    <>
      {genres && (
        <div className="container">
          <div>
            <button type="button" onClick={handleGoBack}>
              Go back
            </button>
            <div className="article" id={id}>
              <div className="article__img-wrap">
                <img
                  src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                  alt={title}
                  className="article__img"
                />
              </div>
              <div className="article__content">
                <h2 className="article__title">{title}</h2>
                <h3 className="article__overview-title">Overview</h3>
                <p className="article__overview"> {overview}</p>
                <h3 className="article__genre">Genres</h3>
                <ul className="article__genre__list list">
                  {genres.map(({ id, name }) => (
                    <li key={id} className="article__genre__item">
                      {name}
                    </li>
                  ))}
                </ul>
                <p className="article__vote">Vote: {vote_average}</p>
                <p className="article__duration">Duration: {runtime} munites</p>
              </div>
            </div>

            {!favouriteMovies.find(movie => movie.id === id) ? (
              <button
                type="button"
                onClick={() => {
                  dispatch(
                    moviesActions.addFavouriteMovie(
                      id,
                      title,
                      overview,
                      genres,
                      poster_path,
                      vote_average,
                      runtime,
                      release_date,
                    ),
                  );
                }}
              >
                Add to favourite
              </button>
            ) : (
              <button
                type="button"
                onClick={() => {
                  dispatch(moviesActions.deleteFavouriteMovie(id));
                }}
              >
                Delete from favourite
              </button>
            )}

            {!queueMovies.find(movie => movie.id === id) ? (
              <button
                type="button"
                onClick={() => {
                  dispatch(
                    moviesActions.addQueueMovie(
                      id,
                      title,
                      overview,
                      genres,
                      poster_path,
                      vote_average,
                      runtime,
                      release_date,
                    ),
                  );
                }}
              >
                Add to queue
              </button>
            ) : (
              <button
                type="button"
                onClick={() => {
                  dispatch(moviesActions.deleteQueueMovie(id));
                }}
              >
                Delete from queue
              </button>
            )}

            {!watchedMovies.find(movie => movie.id === id) ? (
              <button
                type="button"
                onClick={() => {
                  dispatch(
                    moviesActions.addWatchedMovie(
                      id,
                      title,
                      overview,
                      genres,
                      poster_path,
                      vote_average,
                      runtime,
                      release_date,
                    ),
                  );
                }}
              >
                Add to watched
              </button>
            ) : (
              <button
                type="button"
                onClick={() => {
                  dispatch(moviesActions.deleteWatchedMovie(id));
                }}
              >
                Delete from watched
              </button>
            )}

            <div className="movie-info">
              <p>Additional information</p>
              <ul className="list">
                <li>
                  <NavLink
                    to={{
                      pathname: `${match.url}/cast`,
                      state: {
                        ...location.state,
                      },
                    }}
                    className="nav__link"
                    activeClassName="nav__link--active"
                  >
                    Cast
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={{
                      pathname: `${match.url}/review`,
                      state: {
                        ...location.state,
                      },
                    }}
                    className="nav__link"
                    activeClassName="nav__link--active"
                  >
                    Review
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={{
                      pathname: `${match.url}/images`,
                      state: {
                        ...location.state,
                      },
                    }}
                    className="nav__link"
                    activeClassName="nav__link--active"
                  >
                    Movie Images
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>

          <Switch>
            <Route path={`${match.path}/cast`}>
              <Cast /* movieId={movieId} */ />
            </Route>
            <Route path={`${match.path}/review`}>
              <Review movieId={movieId} />
            </Route>
            <Route path={`${match.path}/images`}>
              <MovieImages movieId={movieId} />
            </Route>
          </Switch>
        </div>
      )}
    </>
  );
}
