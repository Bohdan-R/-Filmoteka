import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import moviesActions from './movies-actions';

const movies = createReducer([], {
  [moviesActions.fetchPopularMoviesSuccess]: (_, { payload }) => payload,
  [moviesActions.fetchMoviesSuccess]: (_, { payload }) => payload,
  [moviesActions.clearMovies]: () => [],
});

const totalPopularMovies = createReducer(0, {
  [moviesActions.fetchTotalPopularMoviesSuccess]: (_, { payload }) =>
    Math.ceil(payload / 20),
  [moviesActions.clearTotalResultMovies]: () => 0,
});

const totalMovies = createReducer(0, {
  [moviesActions.fetchTotalMoviesSuccess]: (_, { payload }) =>
    Math.ceil(payload / 20),
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

export default combineReducers({
  movies,
  totalPopularMovies,
  totalMovies,
  movieDetails,
  movieCast,
  movieReview,
  movieImages,
});
