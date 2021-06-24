import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import Pagination from 'react-js-pagination';
import moviesOperations from '../redux/movies/movies-operations';
import moviesSelectors from '../redux/movies/movies-selectors';
import moviesActions from '../redux/movies/movies-actions';
import MoviesList from '../components/MovieList';
import './viewsStyles/MoviesView.scss';

export default function MoviesView() {
  const dispatch = useDispatch();
  const location = useLocation();
  const [page, setPage] = useState(location?.page || 1);

  const movies = useSelector(moviesSelectors.getMovies);
  const totalMovies = useSelector(moviesSelectors.getTotalResultPopularMovies);

  useEffect(() => {
    dispatch(moviesOperations.fetchPopularMovies());
  }, [dispatch]);

  useEffect(() => {
    dispatch(moviesOperations.fetchPopularMovies(page));
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [dispatch, page]);

  useEffect(() => {
    dispatch(moviesActions.clearTotalResultMovies());
  }, [dispatch]);

  const handlePageChange = pageNumber => {
    setPage(pageNumber);
  };

  return (
    <main>
      <section className="section">
        <div className="container">
          <MoviesList movies={movies} page={page} />

          {movies.length > 0 && (
            <Pagination
              activePage={page}
              itemsCountPerPage={20}
              totalItemsCount={totalMovies}
              pageRangeDisplayed={5}
              onChange={handlePageChange}
              innerClass={'pagination'}
              itemClass={'pagination__page'}
              itemClassFirst={'pagination__first-page'}
              itemClassPrev={'pagination__prev-page'}
              itemClassLast={'pagination__last-page'}
              itemClassNext={'pagination__next-page'}
              activeClass={'pagination__active-page'}
              linkClass={'pagination__link'}
              activeLinkClass={'pagination__active-link'}
            />
          )}
        </div>
      </section>
    </main>
  );
}
