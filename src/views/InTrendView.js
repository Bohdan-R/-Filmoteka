import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReactPaginate from 'react-paginate';
import moviesOperations from '../redux/movies/movies-operations';
import moviesSelectors from '../redux/movies/movies-selectors';
import moviesActions from '../redux/movies/movies-actions';
import MoviesList from '../components/MovieList';
import './viewsStyles/MoviesView.scss';

export default function MoviesView() {
  const dispatch = useDispatch();
  const [offset, setOffset] = useState(1);

  const movies = useSelector(moviesSelectors.getMovies);
  const totalPages = useSelector(moviesSelectors.getTotalResultPopularMovies);

  useEffect(() => {
    dispatch(moviesOperations.fetchTotalPopularMovies());
  }, [dispatch]);

  useEffect(() => {
    dispatch(moviesOperations.fetchPopularMovies());
  }, [dispatch]);

  useEffect(() => {
    dispatch(moviesOperations.fetchPopularMovies(offset));
  }, [dispatch, offset]);

  useEffect(() => {
    dispatch(moviesActions.clearTotalResultMovies());
  }, [dispatch]);

  const handlePageClick = event => {
    const selectedPage = event.selected;
    setOffset(selectedPage + 1);
  };

  console.log(totalPages);
  console.log(movies);

  return (
    <main>
      <section className="section">
        <div className="container">
          <MoviesList movies={movies} />

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
          />
        </div>
      </section>
    </main>
  );
}
