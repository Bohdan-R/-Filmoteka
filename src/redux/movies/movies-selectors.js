import { createSelector } from '@reduxjs/toolkit';

const getMovies = state => state.filmoteka.movies;
const getTotalResultPopularMovies = state => state.filmoteka.totalPopularMovies;
const getTotalResultMovies = state => state.filmoteka.totalMovies;
const getMovieDetails = state => state.filmoteka.movieDetails;

export default {
  getMovies,
  getTotalResultPopularMovies,
  getTotalResultMovies,
  getMovieDetails,
};
