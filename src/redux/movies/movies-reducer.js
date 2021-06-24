import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import moviesActions from './movies-actions';

const movies = createReducer([], {
  [moviesActions.fetchPopularMoviesSuccess]: (_, { payload }) => payload,
  [moviesActions.fetchMoviesSuccess]: (_, { payload }) => payload,
  [moviesActions.clearMovies]: () => [],
});

const totalPopularMovies = createReducer(0, {
  [moviesActions.fetchTotalPopularMoviesSuccess]: (_, { payload }) => payload,
  [moviesActions.clearTotalResultMovies]: () => 0,
});

const totalMovies = createReducer(0, {
  [moviesActions.fetchTotalMoviesSuccess]: (_, { payload }) => payload,
  [moviesActions.clearTotalResultMovies]: () => 0,
});

const movieDetails = createReducer(
  {},
  {
    [moviesActions.fetchMovieDetailsSuccess]: (_, { payload }) => payload,
  },
);

const movieCast = createReducer([], {
  [moviesActions.fetchMovieCastSuccess]: (_, { payload }) => payload,
});

const movieReview = createReducer([], {
  [moviesActions.fetchMovieReviewSuccess]: (_, { payload }) => payload,
});

const movieImages = createReducer(null, {
  [moviesActions.fetchMovieImagesSuccess]: (_, { payload }) => payload,
});

const movieGenres = createReducer([], {
  [moviesActions.fetchMovieGenresSuccess]: (_, { payload }) => payload,
});

const favouriteMovies = createReducer([], {
  [moviesActions.addFavouriteMovie]: (state, { payload }) => [...state, payload],
  [moviesActions.deleteFavouriteMovie]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const queueMovies = createReducer([], {
  [moviesActions.addQueueMovie]: (state, { payload }) => [...state, payload],
  [moviesActions.deleteQueueMovie]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const watchedMovies = createReducer([], {
  [moviesActions.addWatchedMovie]: (state, { payload }) => [...state, payload],
  [moviesActions.deleteWatchedMovie]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const loading = createReducer(false, {
  [moviesActions.fetchPopularMoviesRequest]: () => true,
  [moviesActions.fetchPopularMoviesSuccess]: () => false,
  [moviesActions.fetchPopularMoviesError]: () => false,
  [moviesActions.fetchTotalPopularMoviesRequest]: () => true,
  [moviesActions.fetchTotalPopularMoviesSuccess]: () => false,
  [moviesActions.fetchTotalPopularMoviesError]: () => false,
  [moviesActions.fetchMoviesRequest]: () => true,
  [moviesActions.fetchMoviesSuccess]: () => false,
  [moviesActions.fetchMoviesError]: () => false,
  [moviesActions.fetchTotalMoviesRequest]: () => true,
  [moviesActions.fetchTotalMoviesSuccess]: () => false,
  [moviesActions.fetchTotalMoviesError]: () => false,
  [moviesActions.fetchMovieDetailsRequest]: () => true,
  [moviesActions.fetchMovieDetailsSuccess]: () => false,
  [moviesActions.fetchMovieDetailsError]: () => false,
  [moviesActions.fetchMovieImagesRequest]: () => true,
  [moviesActions.fetchMovieImagesSuccess]: () => false,
  [moviesActions.fetchMovieImagesError]: () => false,
  [moviesActions.fetchMovieGenresRequest]: () => true,
  [moviesActions.fetchMovieGenresSuccess]: () => false,
  [moviesActions.fetchMovieGenresError]: () => false,
});

const loadingCastReview = createReducer(false, {
  [moviesActions.fetchMovieCastRequest]: () => true,
  [moviesActions.fetchMovieCastSuccess]: () => false,
  [moviesActions.fetchMovieCastError]: () => false,
  [moviesActions.fetchMovieReviewRequest]: () => true,
  [moviesActions.fetchMovieReviewSuccess]: () => false,
  [moviesActions.fetchMovieReviewError]: () => false,
});

export default combineReducers({
  movies,
  totalPopularMovies,
  totalMovies,
  movieDetails,
  movieCast,
  movieReview,
  movieImages,
  movieGenres,
  favouriteMovies,
  queueMovies,
  watchedMovies,
  loading,
  loadingCastReview,
});
