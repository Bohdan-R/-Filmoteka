import axios from 'axios';
import moviesActions from './movies-actions';

const apiKey = '3550330ecc32a34c7342dbd44dd96d6e';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const fetchPopularMovies = (page = 1) => async dispatch => {
  dispatch(moviesActions.fetchPopularMoviesRequest());
  dispatch(moviesActions.fetchTotalPopularMoviesRequest());

  try {
    const { data } = await axios.get(
      `/trending/movie/day?api_key=${apiKey}&page=${page}`,
    );

    dispatch(moviesActions.fetchTotalPopularMoviesSuccess(data.total_results));
    dispatch(moviesActions.fetchPopularMoviesSuccess(data.results));
  } catch (error) {
    dispatch(moviesActions.fetchPopularMoviesError(error));
    dispatch(moviesActions.fetchTotalPopularMoviesError(error));
  }
};

const fetchMovies = (query, page = 1) => async dispatch => {
  dispatch(moviesActions.fetchMoviesRequest());
  dispatch(moviesActions.fetchTotalMoviesRequest());

  try {
    const { data } = await axios.get(
      `/search/movie?api_key=${apiKey}&query=${query}&page=${page}`,
    );

    dispatch(moviesActions.fetchTotalMoviesSuccess(data.total_results));
    dispatch(moviesActions.fetchMoviesSuccess(data.results));
  } catch (error) {
    dispatch(moviesActions.fetchMoviesError(error));
    dispatch(moviesActions.fetchTotalMoviesError(error));
  }
};

const fetchMovieDetails = movieId => async dispatch => {
  dispatch(moviesActions.fetchMovieDetailsRequest());

  try {
    const { data } = await axios.get(
      `/movie/${movieId}?api_key=${apiKey}&language=en-US`,
    );

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

    dispatch(moviesActions.fetchMovieCastSuccess(data.cast));
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

    dispatch(moviesActions.fetchMovieReviewSuccess(data.results));
  } catch (error) {
    dispatch(moviesActions.fetchMovieReviewError(error));
  }
};

const fetchMovieImages = movieId => async dispatch => {
  dispatch(moviesActions.fetchMovieImagesRequest());

  try {
    const data = await axios.get(
      `/movie/${movieId}/images?api_key=${apiKey}&include_image_language = en,null`,
    );

    dispatch(moviesActions.fetchMovieImagesSuccess(data));
  } catch (error) {
    dispatch(moviesActions.fetchMovieImagesError(error));
  }
};

const fetchMovieGenres = () => async dispatch => {
  dispatch(moviesActions.fetchMovieGenresRequest());

  try {
    const { data } = await axios.get(
      `/genre/movie/list?api_key=${apiKey}&language=en-US`,
    );

    console.log(data.genres);
    dispatch(moviesActions.fetchMovieGenresSuccess(data.genres));
  } catch (error) {
    dispatch(moviesActions.fetchMovieGenresError(error));
  }
};

export default {
  fetchPopularMovies,
  fetchMovies,
  fetchMovieDetails,
  fetchMovieCast,
  fetchMovieReview,
  fetchMovieImages,
  fetchMovieGenres,
};
