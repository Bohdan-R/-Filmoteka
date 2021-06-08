import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function MoviesList({ movies, page = null }) {
  const location = useLocation();

  return (
    <ul className="movies__list">
      {movies.map(({ id, title, poster_path, release_date, vote_average }) => (
        <Link
          to={{
            pathname: `movies/${id}`,
            state: {
              from: { ...location, page },
            },
          }}
          key={id}
        >
          <li key={id} className="movies__card">
            <div className="front">
              <img
                src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                alt={title}
                className="movies__img"
              />
            </div>
            <div className="back">
              <h2>{title}</h2>
              <p>Release data: {release_date}</p>
              <p>Vote average: {vote_average}</p>
            </div>
          </li>
        </Link>
      ))}
    </ul>
  );
}
