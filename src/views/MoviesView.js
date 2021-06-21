import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import Pagination from 'react-js-pagination';
import _ from 'lodash';
import moviesOperations from '../redux/movies/movies-operations';
import moviesSelectors from '../redux/movies/movies-selectors';
import moviesActions from '../redux/movies/movies-actions';
import MoviesList from '../components/MovieList';
import { BiSearchAlt2 } from 'react-icons/bi';
import SearchForm from '../components/SearchForm';
import './viewsStyles/MoviesView.scss';

export default function MoviesView() {
  const dispatch = useDispatch();
  const location = useLocation();
  const movies = useSelector(moviesSelectors.getMovies);
  const totalMovies = useSelector(moviesSelectors.getTotalResultMovies);

  const [page, setPage] = useState(location?.page || 1);
  const [search, setSearch] = useState(location?.search.slice(1) || '');

  /* useEffect(() => {
    if (!search) {
      return;
    }
    dispatch(moviesOperations.fetchTotalMovies(search));
  }, [dispatch]); */

  useEffect(() => {
    dispatch(moviesActions.clearMovies());
    if (!search) {
      return;
    }

    dispatch(moviesOperations.fetchMovies(search));
  }, [dispatch]);

  useEffect(() => {
    if (!search) {
      return;
    }
    dispatch(moviesOperations.fetchMovies(search, page));

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [dispatch, page]);

  const handlePageClick = event => {
    const selectedPage = event.selected;
    setPage(selectedPage + 1);
  };

  const handleSearchChange = e => {
    setSearch(e.currentTarget.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(moviesOperations.fetchMovies(search));

    location.search = search;
    /* setSearch(''); */
  };

  const handlePageChange = pageNumber => {
    console.log(`active page is ${pageNumber}`);
    setPage(pageNumber);
  };

  return (
    <main>
      <section className="section">
        <div className="container">
          <form className="search-form" onSubmit={handleSubmit}>
            <div className="search-form__input-wrap">
              <input
                className="search-form__input"
                type="text"
                name="name"
                value={search}
                autoComplete="off"
                onChange={handleSearchChange}
              />
              <button type="submit" className="search-form__button" onSubmit={handleSubmit}>
                <BiSearchAlt2 className="search-form__icon" />
              </button>
            </div>
          </form>

          {/* <SearchForm /> */}
          <MoviesList movies={movies} page={page} />

          {/* <div className="pagination-container">
            {movies.length > 0 && (
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
            )}
          </div> */}

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
