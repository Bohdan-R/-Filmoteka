import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import moviesOperations from '../redux/movies/movies-operations';
import moviesSelectors from '../redux/movies/movies-selectors';
import moviesActions from '../redux/movies/movies-actions';
import MoviesList from '../components/MovieList';

export default function MoviesView() {
  const dispatch = useDispatch();
  const location = useLocation();
  const favouriteMovies = useSelector(moviesSelectors.getFavouriteMovies);
  console.log(favouriteMovies);

  return (
    <main>
      <section className="section">
        <div className="container">
          <MoviesList movies={favouriteMovies} />
        </div>
      </section>
    </main>
  );
}
