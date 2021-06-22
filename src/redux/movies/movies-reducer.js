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
});
