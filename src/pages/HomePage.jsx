import { useState, useEffect } from "react";
import { fetchMovies } from "../../TmbdService";
import MovieList from "../../components/MovieList/MovieList";
import MovieList from "../../components/MovieList/MovieList";

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getMovies() {
      try {
        setIsLoading(true);
        setError(false);
        const data = await fetchMovies();
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
      {isLoading && <p>Loading...</p>}
      {error && <p>Whoops there was an error, please reload the page.</p>}
      {movies.length > 0 && <MovieList movies={movies} />}
    </div>
  );
}
