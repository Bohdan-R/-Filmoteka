import axios from 'axios';
import moviesActions from './movies-actions';

const apiKey = '3550330ecc32a34c7342dbd44dd96d6e';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const fetchPopularMovies = (page = 1) => async dispatch => {
  dispatch(moviesActions.fetchPopularMoviesRequest());

  try {
    const { data } = await axios.get(
      `/trending/movie/day?api_key=${apiKey}&page=${page}`,
    );
    console.log(data.results);
    dispatch(moviesActions.fetchPopularMoviesSuccess(data.results));
  } catch (error) {
    dispatch(moviesActions.fetchPopularMoviesError(error));
  }
};

const fetchTotalPopularMovies = () => async dispatch => {
  dispatch(moviesActions.fetchTotalPopularMoviesRequest());

  try {
    const { data } = await axios.get(`/trending/movie/day?api_key=${apiKey}`);

    console.log(data.total_results);
    dispatch(moviesActions.fetchTotalPopularMoviesSuccess(data.total_results));
  } catch (error) {
    dispatch(moviesActions.fetchTotalPopularMoviesError(error));
  }
};

const fetchMovies = (query, page = 1) => async dispatch => {
  dispatch(moviesActions.fetchMoviesRequest());

  try {
    const { data } = await axios.get(
      `/search/movie?api_key=${apiKey}&query=${query}&page=${page}`,
    );

    console.log(data.results);
    dispatch(moviesActions.fetchMoviesSuccess(data.results));
  } catch (error) {
    dispatch(moviesActions.fetchMoviesError(error));
  }
};

const fetchTotalMovies = query => async dispatch => {
  dispatch(moviesActions.fetchTotalMoviesRequest());

  try {
    const { data } = await axios.get(
      `/search/movie?api_key=${apiKey}&query=${query}`,
    );

    console.log(data.total_results);
    dispatch(moviesActions.fetchTotalMoviesSuccess(data.total_results));
  } catch (error) {
    dispatch(moviesActions.fetchTotalMoviesError(error));
  }
};

const fetchMovieDetails = movieId => async dispatch => {
  dispatch(moviesActions.fetchMovieDetailsRequest());

  try {
    const { data } = await axios.get(
      `/movie/${movieId}?api_key=${apiKey}&language=en-US`,
    );

    console.log(data);

    dispatch(moviesActions.fetchMovieDetailsSuccess(data));
  } catch (error) {
    dispatch(moviesActions.fetchMovieDetailsError(error));
  }
};

const fetchMovieCast = movieId => async dispatch => {
  dispatch(moviesActions.fetchMovieCastRequest());

  try {
    const { data } = await axios.get(
      `/movie/${movieId}/credits?api_key=${apiKey}&language=en-US`,
    );

    console.log(data);

    dispatch(moviesActions.fetchMovieCastSuccess(data));
  } catch (error) {
    dispatch(moviesActions.fetchMovieCastError(error));
  }
};

const fetchMovieReview = movieId => async dispatch => {
  dispatch(moviesActions.fetchMovieReviewRequest());

  try {
    const { data } = await axios.get(
      `/movie/${movieId}/reviews?api_key=${apiKey}&language=en-US`,
    );

    console.log(data);

    dispatch(moviesActions.fetchMovieReviewSuccess(data));
  } catch (error) {
    dispatch(moviesActions.fetchMovieReviewError(error));
  }
};

export default {
  fetchPopularMovies,
  fetchTotalPopularMovies,
  fetchMovies,
  fetchTotalMovies,
  fetchMovieDetails,
  fetchMovieCast,
  fetchMovieReview,
};
