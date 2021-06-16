import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useLocation } from 'react-router-dom';
import moviesOperations from '../../redux/movies/movies-operations';
import moviesSelectors from '../../redux/movies/movies-selectors';
import './Review.scss';

export default function Review() {
  const dispatch = useDispatch();

  const reviews = useSelector(moviesSelectors.getMovieReview);
  const location = useLocation();
  const { movieId } = useParams();

  useEffect(() => {
    dispatch(moviesOperations.fetchMovieReview(movieId));
  }, [dispatch, movieId]);

  console.log(reviews);
  return (
    <div className="review">
      {reviews.length === 0 ? (
        <p className="review__nothing">We don't heve any reviews for this movies</p>
      ) : (
        <ul className="review__list">
          {reviews.map(({ id, author, content, created_at, author_details: { rating } }) => (
            <li key={id} className="review__item">
              <div className="review__info-box">
                <p className="review__info">
                  Author: <span>{author}</span>
                </p>
                <p className="review__info">
                  rating: <span>{rating}</span>
                </p>
              </div>
              <p className="review__date">
                {created_at.slice(0, 10)}&nbsp;&nbsp;{created_at.slice(11, 19)}
              </p>
              <p className="review__content">{content}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
