import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useLocation } from 'react-router-dom';
import moviesOperations from '../../redux/movies/movies-operations';
import moviesSelectors from '../../redux/movies/movies-selectors';

export default function Cast() {
  const dispatch = useDispatch();

  const cast = useSelector(moviesSelectors.getMovieCast);
  const location = useLocation();
  const { movieId } = useParams();

  useEffect(() => {
    dispatch(moviesOperations.fetchMovieCast(movieId));
  }, [dispatch, movieId]);

  console.log(location);
  return (
    <ul className="list">
      {cast &&
        cast.map(actor => (
          <li key={actor.id}>
            <div className="cast-card">
              <img alt="" src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`} />
              <p>{actor.name}</p>
              <p>Character: {actor.character}</p>
            </div>
          </li>
        ))}
    </ul>
  );
}
