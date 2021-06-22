import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useLocation } from 'react-router-dom';
import moviesOperations from '../../redux/movies/movies-operations';
import moviesSelectors from '../../redux/movies/movies-selectors';
import './Cast.scss';

export default function Cast() {
  const dispatch = useDispatch();

  const cast = useSelector(moviesSelectors.getMovieCast);
  const location = useLocation();
  const { movieId } = useParams();

  useEffect(() => {
    dispatch(moviesOperations.fetchMovieCast(movieId));
  }, [dispatch, movieId]);

  console.log(cast);
  return (
    <div className="cast">
      <ul className="cast__list">
        {cast &&
          cast.map(actor => (
            <li key={actor.id} className="cast__item">
              <div className="cast__card">
                <div className="cast__img-box">
                  <img
                    alt=""
                    src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
                    className="cast__img"
                  />
                </div>
                <div className="cast__content">
                  <div className="cast__content-decor"></div>
                  <p className="cast__content__info">{actor.name}</p>
                  <p className="cast__content__title">Character</p>
                  <p className="cast__content__info">{actor.character}</p>
                </div>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
}
