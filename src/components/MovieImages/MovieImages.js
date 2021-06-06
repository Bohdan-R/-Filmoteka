import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useLocation } from 'react-router-dom';
import moviesOperations from '../../redux/movies/movies-operations';
import moviesSelectors from '../../redux/movies/movies-selectors';

export default function MovieImages() {
  const dispatch = useDispatch();

  const images = useSelector(moviesSelectors.getMovieImages);
  const location = useLocation();
  const { movieId } = useParams();

  useEffect(() => {
    dispatch(moviesOperations.fetchMovieImages(movieId));
  }, [dispatch, movieId]);

  console.log(images);
  return <div></div>;
}
