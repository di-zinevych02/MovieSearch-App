import { useState, useEffect } from "react";
import { fetchTrendingMovies } from "../APITmdb";
import MovieList from "../components/MovieList/MovieList";
import Loader from "../components/Loader/Loader";
import ErrorMessage from "../components/ErrorMessage/ErrorMessage";

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getMovies() {
      try {
        setIsLoading(true);
        setError(false);
        const data = await fetchTrendingMovies();
        setMovies(data.results);
      } catch {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getMovies();
  }, []);
  return (
    <div>
      <h2>Trending today</h2>
      {isLoading && <Loader />}
              {error && <ErrorMessage error={error} />}
      {movies.length > 0 && <MovieList movies={movies} />}
    </div>
  );
}
