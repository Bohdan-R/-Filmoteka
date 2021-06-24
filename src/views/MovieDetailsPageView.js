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
import moviesActions from '../redux/movies/movies-actions';
import Cast from '../components/Cast';
import Review from '../components/Review';
import Spinner from '../components/Spinner';
import './viewsStyles/MovieDetailsPageView.scss';
import { motion } from 'framer-motion';
import { MdFavorite, MdLocalMovies, MdLibraryAdd } from 'react-icons/md';
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
    budget,
  } = useSelector(moviesSelectors.getMovieDetails);
  const favouriteMovies = useSelector(moviesSelectors.getFavouriteMovies);
  const queueMovies = useSelector(moviesSelectors.getQueueMovies);
  const watchedMovies = useSelector(moviesSelectors.getWatchedMovies);
  const isLoading = useSelector(moviesSelectors.getLoading);

  const history = useHistory();
  const params = useParams();
  const location = useLocation();
  const match = useRouteMatch();

  console.log(location);
  console.log(params);
  console.log(match);
  console.log(history);

  console.log(poster_path);

  const movieId = params.movieId;

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
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="movie-page-container"
          >
            <button type="button" className="btn-go-back" onClick={handleGoBack}>
              <AiOutlineRollback />
            </button>
            {isLoading ? (
              <Spinner />
            ) : (
              <div className="article" id={id}>
                <div className="article__img-wrap">
                  {/* <img
                    src={
                      poster_path
                        ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                        : 'Images/movie-back-im.png'
                    }
                    alt={title}
                    className="article__img"
                  /> */}

                  {poster_path ? (
                    <img
                      src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                      alt={title}
                      className="article__img"
                    />
                  ) : (
                    <img src="" alt="" className="article__img--error" />
                  )}
                </div>
                <div className="article__content">
                  <h2 className="article__title">{title}</h2>
                  <h3 className="article__content-title">Vote</h3>
                  <p className="article__content-text">
                    <span>IMDb</span>&nbsp;&nbsp;{vote_average}
                  </p>
                  <h3 className="article__content-title">Genres</h3>
                  <ul className="article__genre-list">
                    {genres &&
                      genres.map(({ id, name }) => (
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
                  {/* <div className="article__btn-box">
                    {!favouriteMovies.find(movie => movie.id === id) ? (
                      <button
                        className="article__btn"
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
                              budget,
                            ),
                          );
                        }}
                      >
                        <MdFavorite />
                        <span className="article__btn__tooltip">Add to favourite</span>
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
                        <span className="article__btn__tooltip">Delete from favourite</span>
                      </button>
                    )}

                    {!queueMovies.find(movie => movie.id === id) ? (
                      <button
                        className="article__btn"
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
                              budget,
                            ),
                          );
                        }}
                      >
                        <MdLibraryAdd />
                        <span className="article__btn__tooltip">Add to queue</span>
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
                        <span className="article__btn__tooltip">Delete from queue</span>
                      </button>
                    )}

                    {!watchedMovies.find(movie => movie.id === id) ? (
                      <button
                        className="article__btn"
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
                              budget,
                            ),
                          );
                        }}
                      >
                        <MdLocalMovies />
                        <span className="article__btn__tooltip">Add to watched</span>
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
                        <span className="article__btn__tooltip">Delete from watched</span>
                      </button>
                    )}
                  </div> */}
                  <ul className="article__list-btn">
                    {!favouriteMovies.find(movie => movie.id === id) ? (
                      <li className="article__item-btn">
                        <button
                          className="article__btn"
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
                                budget,
                              ),
                            );
                          }}
                        >
                          <MdFavorite />
                        </button>
                        <span className="article__btn__tooltip">Add to favourite</span>
                      </li>
                    ) : (
                      <li className="article__item-btn">
                        <button
                          className="article__btn article__btn--delete"
                          type="button"
                          onClick={() => {
                            dispatch(moviesActions.deleteFavouriteMovie(id));
                          }}
                        >
                          <MdFavorite />
                        </button>
                        <span className="article__btn__tooltip">Delete from favourite</span>
                      </li>
                    )}

                    {!queueMovies.find(movie => movie.id === id) ? (
                      <li className="article__item-btn">
                        <button
                          className="article__btn"
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
                                budget,
                              ),
                            );
                          }}
                        >
                          <MdLibraryAdd />
                        </button>
                        <span className="article__btn__tooltip">Add to queue</span>
                      </li>
                    ) : (
                      <li className="article__item-btn">
                        <button
                          className="article__btn article__btn--delete"
                          type="button"
                          onClick={() => {
                            dispatch(moviesActions.deleteQueueMovie(id));
                          }}
                        >
                          <MdLibraryAdd />
                        </button>
                        <span className="article__btn__tooltip">Delete from queue</span>
                      </li>
                    )}

                    {!watchedMovies.find(movie => movie.id === id) ? (
                      <li className="article__item-btn">
                        <button
                          className="article__btn"
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
                                budget,
                              ),
                            );
                          }}
                        >
                          <MdLocalMovies />
                        </button>
                        <span className="article__btn__tooltip">Add to watched</span>
                      </li>
                    ) : (
                      <li className="article__item-btn">
                        <button
                          className="article__btn article__btn--delete"
                          type="button"
                          onClick={() => {
                            dispatch(moviesActions.deleteWatchedMovie(id));
                          }}
                        >
                          <MdLocalMovies />
                        </button>
                        <span className="article__btn__tooltip">Delete from watched</span>
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            )}
            <div className="article-decorate-line article-decorate-line--up"></div>
            <div className="additional-info">
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
              </ul>
            </div>
            <Switch>
              <Route path={`${match.path}/cast`}>
                <Cast />
              </Route>
              <Route path={`${match.path}/review`}>
                <Review />
              </Route>
            </Switch>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
