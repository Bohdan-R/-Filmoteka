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

  const history = useHistory();
  const params = useParams();
  const location = useLocation();
  const match = useRouteMatch();

  const movieId = params.movieId;

  /*   console.log(location);
  console.log(match.url);
  console.log(match.path);
  console.log(movieId); */

  useEffect(() => {
    dispatch(moviesOperations.fetchMovieDetails(movieId));
  }, [dispatch, movieId]);

  const handleGoBack = () => {
    if (location.state && location.state.from) {
      return history.push(location.state.from);
    }

    history.push('/');
  };

  return (
    <>
      {genres && (
        <div>
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
                Delete
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
                        from: { ...location.state.from },
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
                        from: { ...location.state.from },
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
                        from: { ...location.state.from },
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
            <Route path={`${match.path}/cast`} movieId={movieId}>
              <Cast />
            </Route>
            <Route path={`${match.path}/review`} movieId={movieId}>
              <Review />
            </Route>
            <Route path={`${match.path}/images`} movieId={movieId}>
              <MovieImages />
            </Route>
          </Switch>
        </div>
      )}
    </>
  );
}
