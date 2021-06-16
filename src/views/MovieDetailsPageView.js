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
import './viewsStyles/MovieDetailsPageView.scss';
import className from 'classnames';
import { MdFavorite, MdLocalMovies, MdLibraryAdd } from 'react-icons/md';
import { RiArrowGoBackFill } from 'react-icons/ri';
import { AiOutlineRollback } from 'react-icons/ai';

export default function MovieDetailsPageView() {
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
    <main>
      <section className="section">
        {genres && (
          <div className="container">
            <div className="article-container">
              {/* <div className="article-decorate-line article-decorate-line--down"></div> */}
              <button type="button" className="btn-go-back" onClick={handleGoBack}>
                <AiOutlineRollback />
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
                  <div className="article__title-box">
                    <h2 className="article__title">{title}</h2>
                  </div>
                  <h3 className="article__content-title">Vote</h3>
                  <p className="article__content-text">
                    <span>IMDb</span>&nbsp;&nbsp;{vote_average}
                  </p>
                  <h3 className="article__content-title">Genres</h3>
                  <ul className="article__genre-list">
                    {genres.map(({ id, name }) => (
                      <li key={id} className="article__genre-item">
                        {name}
                        <span>,&nbsp;&nbsp;</span>
                      </li>
                    ))}
                  </ul>
                  <h3 className="article__content-title">Duration</h3>
                  <p className="article__content-text">{runtime} munites</p>
                  <h3 className="article__content-title">Overview</h3>
                  <p className="article__content-text"> {overview}</p>
                  <div className="article__btn-box">
                    {!favouriteMovies.find(movie => movie.id === id) ? (
                      <button
                        className="article__btn article__btn--add"
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
                        <MdFavorite />
                      </button>
                    ) : (
                      <button
                        className="article__btn article__btn--delete"
                        type="button"
                        onClick={() => {
                          dispatch(moviesActions.deleteFavouriteMovie(id));
                        }}
                      >
                        <MdFavorite />
                      </button>
                    )}

                    {!queueMovies.find(movie => movie.id === id) ? (
                      <button
                        className="article__btn article__btn--add"
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
                        <MdLibraryAdd />
                      </button>
                    ) : (
                      <button
                        className="article__btn article__btn--delete"
                        type="button"
                        onClick={() => {
                          dispatch(moviesActions.deleteQueueMovie(id));
                        }}
                      >
                        <MdLibraryAdd />
                      </button>
                    )}

                    {!watchedMovies.find(movie => movie.id === id) ? (
                      <button
                        className="article__btn article__btn--add"
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
                        <MdLocalMovies />
                      </button>
                    ) : (
                      <button
                        className="article__btn article__btn--delete"
                        type="button"
                        onClick={() => {
                          dispatch(moviesActions.deleteWatchedMovie(id));
                        }}
                      >
                        <MdLocalMovies />
                      </button>
                    )}
                  </div>
                  {/* <ul className="article__content-icon-list">
                    <li
                      className={className('article__content-icon-item', {
                        'article__content-icon-item--active': favouriteMovies.find(
                          movie => movie.id === id,
                        ),
                      })}
                    >
                      <MdFavorite />
                    </li>
                    <li
                      className={className('article__content-icon-item', {
                        'article__content-icon-item--active': queueMovies.find(
                          movie => movie.id === id,
                        ),
                      })}
                    >
                      <MdLibraryAdd />
                    </li>
                    <li
                      className={className('article__content-icon-item', {
                        'article__content-icon-item--active': watchedMovies.find(
                          movie => movie.id === id,
                        ),
                      })}
                    >
                      <MdLocalMovies />
                    </li>
                  </ul> */}
                </div>
              </div>

              {/* <div className="overview-box">
                <h3 className="article__content-title">Overview</h3>
                <p className="article__content-text"> {overview}</p>
              </div> */}

              <div className="article-decorate-line article-decorate-line--up"></div>

              <div className="additional-info">
                {/* <p className="additional-info__title">Additional information</p> */}
                <ul className="additional-info__list">
                  <li className="additional-info__item">
                    <NavLink
                      to={{
                        pathname: `${match.url}/cast`,
                        state: {
                          ...location.state,
                        },
                      }}
                      className="additional-info__link"
                      activeClassName="additional-info__link--active"
                    >
                      Cast
                    </NavLink>
                  </li>
                  <li className="additional-info__item">
                    <NavLink
                      to={{
                        pathname: `${match.url}/review`,
                        state: {
                          ...location.state,
                        },
                      }}
                      className="additional-info__link"
                      activeClassName="additional-info__link--active"
                    >
                      Review
                    </NavLink>
                  </li>
                  {/* <li className="additional-info__item">
                    <NavLink
                      to={{
                        pathname: `${match.url}/images`,
                        state: {
                          ...location.state,
                        },
                      }}
                      className="additional-info__link"
                      activeClassName="additional-info__link--active"
                    >
                      Movie Images
                    </NavLink>
                  </li> */}
                </ul>
              </div>

              {/* <div className="article-decorate-line article-decorate-line--down"></div> */}
            </div>

            <Switch>
              <Route path={`${match.path}/cast`}>
                <Cast /* movieId={movieId} */ />
              </Route>
              <Route path={`${match.path}/review`}>
                <Review movieId={movieId} />
              </Route>
              {/* <Route path={`${match.path}/images`}>
                <MovieImages movieId={movieId} />
              </Route> */}
            </Switch>
          </div>
        )}
      </section>
    </main>
  );
}
