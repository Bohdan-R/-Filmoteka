import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import moviesOperations from '../../redux/movies/movies-operations';

export default function SearchForm() {
  const dispatch = useDispatch();
  const location = useLocation();
  const [search, setSearch] = useState('');

  const handleSearchChange = e => {
    setSearch(e.currentTarget.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(moviesOperations.fetchMovies(search));
    /* localStorage.setItem('searchQuery', search); */

    location.search = search;

    resetInput();
  };

  const resetInput = () => {
    setSearch('');
  };

  useEffect(() => {
    const { search } = location;

    if (search !== '') {
      setSearch(search);
    } else {
      return;
    }
    setSearch('');
  }, [location]);

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <div className="search-form__input-wrap">
        <input
          className="search-form__input"
          type="text"
          name="name"
          value={search}
          autoComplete="off"
          onChange={handleSearchChange}
          placeholder="Search movies"
        />
      </div>
    </form>
  );
}
