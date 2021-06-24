import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import moviesOperations from '../../redux/movies/movies-operations';
import moviesSelectors from '../../redux/movies/movies-selectors';
import { motion } from 'framer-motion';
import Spinner from '../Spinner';
import './Cast.scss';

export default function Cast() {
  const dispatch = useDispatch();

  const cast = useSelector(moviesSelectors.getMovieCast);
  const isLoadingCast = useSelector(moviesSelectors.getLoadingCastReview);
  const { movieId } = useParams();

  useEffect(() => {
    dispatch(moviesOperations.fetchMovieCast(movieId));

    /* window.scrollTo({
      top: 0,
      behavior: 'smooth',
    }); */
  }, [dispatch, movieId]);

  console.log(cast);
  return (
    <div className="cast">
      {isLoadingCast ? (
        <Spinner />
      ) : (
        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.85 }}
          className="cast__list"
        >
          {cast &&
            cast.map(({ id, profile_path, name, character }) => (
              <li key={id} className="cast__item">
                <div className="cast__card">
                  <div className="cast__img-box">
                    {profile_path ? (
                      <img
                        alt={name}
                        src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
                        className="cast__img"
                      />
                    ) : (
                      <img
                        alt=""
                        src={'https://i.dlpng.com/static/png/7174186_preview.png'}
                        className="cast__img--error"
                      />
                    )}
                  </div>
                  <div className="cast__content">
                    <div className="cast__content-decor"></div>
                    <p className="cast__content__info">{name}</p>
                    <p className="cast__content__title">Character</p>
                    <p className="cast__content__info">{character}</p>
                  </div>
                </div>
              </li>
            ))}
        </motion.ul>
      )}
    </div>
  );
}
