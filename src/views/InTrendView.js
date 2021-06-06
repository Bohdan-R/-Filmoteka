import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import moviesOperations from '../redux/movies/movies-operations';
import moviesSelectors from '../redux/movies/movies-selectors';
import moviesActions from '../redux/movies/movies-actions';
import MoviesList from '../components/MovieList';
import './viewsStyles/MoviesView.scss';

export default function MoviesView() {
  const dispatch = useDispatch();
  const location = useLocation();
  const [page, setPage] = useState(location?.page || 1);

  console.log(location);

  const movies = useSelector(moviesSelectors.getMovies);
  const totalPages = useSelector(moviesSelectors.getTotalResultPopularMovies);

  /* useEffect(() => {
    dispatch(moviesOperations.fetchTotalPopularMovies());
  }, [dispatch]); */

  useEffect(() => {
    dispatch(moviesOperations.fetchPopularMovies());
  }, [dispatch]);

  useEffect(() => {
    dispatch(moviesOperations.fetchPopularMovies(page));
  }, [dispatch, page]);

  useEffect(() => {
    dispatch(moviesActions.clearTotalResultMovies());
  }, [dispatch]);

  const handlePageClick = event => {
    const selectedPage = event.selected;
    setPage(selectedPage + 1);
  };

  return (
    <main>
      <section className="section">
        <div className="container">
          <MoviesList movies={movies} page={page} />

          <ReactPaginate
            previousLabel={'previous'}
            nextLabel={'next'}
            breakLabel={'...'}
            breakClassName={'break-me'}
            pageCount={totalPages}
            onPageChange={handlePageClick}
            containerClassName={'pagination'}
            subContainerClassName={'pages pagination'}
            activeClassName={'active'}
            pageRangeDisplayed={2}
            marginPagesDisplayed={2}
          />
        </div>
      </section>
    </main>
  );
}
