import React, { useEffect } from 'react';
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

export default function MovieDetailsPage() {
  const dispatch = useDispatch();
  const {
    id,
    title,
    poster_path,
    vote_average,
    runtime,
    overview,
    genres,
  } = useSelector(moviesSelectors.getMovieDetails);

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
            <div className="article">
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

            <div className="movie-info">
              <p>Additional information</p>
              <ul className="list">
                <li>
                  {/*  <NavLink
                to={}
                className="nav__link"
                activeClassName="nav__link--active"
              >
                Cast
              </NavLink> */}
                </li>
                <li>
                  {/* <NavLink
                to={}
                className="nav__link"
                activeClassName="nav__link--active"
              >
                Reviews
              </NavLink> */}
                </li>
              </ul>
            </div>
          </div>

          <Switch>
            {/*  <Route
          path={`${match.path}/cast`}
          render={props => (
            <Cast {...props} movieId={Number(match.params.movieId)} />
          )}
        />
        <Route
          path={`${match.path}/review`}
          render={props => (
            <Review {...props} movieId={Number(match.params.movieId)} />
          )}
        /> */}
          </Switch>
        </div>
      )}
    </>
  );
}
