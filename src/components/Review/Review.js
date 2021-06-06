import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useLocation } from 'react-router-dom';
import moviesOperations from '../../redux/movies/movies-operations';
import moviesSelectors from '../../redux/movies/movies-selectors';

export default function Review() {
  const dispatch = useDispatch();

  const reviews = useSelector(moviesSelectors.getMovieReview);
  const location = useLocation();
  const { movieId } = useParams();

  useEffect(() => {
    dispatch(moviesOperations.fetchMovieReview(movieId));
  }, [dispatch, movieId]);

  console.log(location);
  return (
    <div>
      {reviews.length === 0 ? (
        <p>We don't heve any reviews for this movies</p>
      ) : (
        <ul>
          {reviews.map(({ id, author, content }) => (
            <li key={id}>
              <b>Author: {author}</b>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
