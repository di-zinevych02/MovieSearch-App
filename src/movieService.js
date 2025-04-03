import axios from "axios";

const options = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MTMxNGNjYTZhMmZjZTUyMGEzYTY3Yzg1ZjZiMmQwZCIsIm5iZiI6MTc0MzI2NzkxMC4xMTIsInN1YiI6IjY3ZTgyODQ2ZjFmNTM3Njg3NWRkYzVmNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tvbKivv2_XlVI3jo9sESO7Ut2gyH0tq1tNcrdtw8yrI",
  },
};
//список найпопулярніших фільмів на сьогодні для створення колекції на головній сторінці
export const fetchTrendingMovies = async () => {
  const url =
    "https://api.themoviedb.org/3/trending/movie/day?include_adult=false&lang=en-US&page=1";
  const response = await axios.get(url, options);
  return response.data;
};

//пошук фільму за ключовим словом на сторінці фільмів.
export const fetchSearchMovies = async (searchQuery) => {
  const url = `https://api.themoviedb.org/3/search/movie?query=${searchQuery}&include_adult=false&language=en-US&page=1`;
  const response = await axios.get(url, options);
  return response.data.results;
};

//запит повної інформації про фільм для сторінки кінофільму.
export const fetchMoviesDetails = async (movieId) => {
  const url = `https://api.themoviedb.org/3/movie/${movieId}?include_adult=false&language=en-US&page=1`;
  const response = await axios.get(url, options);
  return response.data;
};

//запит інформації про акторський склад для сторінки кінофільму.
export const fetchMovieCredits = async (movieId) => {
  const url = `https://api.themoviedb.org/3/movie/${movieId}/credits`;
  const response = await axios.get(url, options);
  return response.data.cast;
};

//запит оглядів для сторінки кінофільму
export const fetchMovieReviews = async (movieId) => {
  const url = `https://api.themoviedb.org/3/movie/${movieId}/reviews`;
  const response = await axios.get(url, options);
  return response.data.results;
};
