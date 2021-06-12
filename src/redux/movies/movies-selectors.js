import { createSelector } from '@reduxjs/toolkit';

const getMovies = state => state.filmoteka.movies;
const getTotalResultPopularMovies = state => state.filmoteka.totalPopularMovies;
const getTotalResultMovies = state => state.filmoteka.totalMovies;
const getMovieDetails = state => state.filmoteka.movieDetails;
const getMovieCast = state => state.filmoteka.movieCast;
const getMovieReview = state => state.filmoteka.movieReview;
const getMovieImages = state => state.filmoteka.movieImages;
const getMovieGenres = state => state.filmoteka.movieGenres;
const getFavouriteMovies = state => state.filmoteka.favouriteMovies;
const getQueueMovies = state => state.filmoteka.queueMovies;
const getWatchedMovies = state => state.filmoteka.watchedMovies;

export default {
  getMovies,
  getTotalResultPopularMovies,
  getTotalResultMovies,
  getMovieDetails,
  getMovieCast,
  getMovieReview,
  getMovieImages,
  getMovieGenres,
  getFavouriteMovies,
  getQueueMovies,
  getWatchedMovies,
};
