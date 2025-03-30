import { useState, useEffect } from "react";
import { useSearchParams } from "react-router";
import SearchInput from "../components/SearchInput/SearchInput";
import { fetchSearchMovies } from "../apiTmdb";
import MovieList from "../components/MovieList/MovieList";

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  //можливість отримати доступ до параметрів частини лінка
  const [searchParams, setSearchParams] = useSearchParams();
  //отримуємо поточне значення параметрів
  const query = searchParams.get("query") ?? "";
  const [searchQuery, setSearchQuery] = useState(query);

  const handleSearchMovie = (event) => {
    //зробили копію параметрів, щоб змінювати їх
    const nextParams = new URLSearchParams(searchParams);
  };

  useEffect(() => {
    if (!query) {
      setMovies([]);
      return;
    }
    async function getMovie() {
      try {
        setIsLoading(true);
        setError(false);
        const results = await fetchSearchMovies(query);
        if (results.length === 0) {
          alert(
            "Sorry, there are no images matching your search query. Please try again!"
          );
          return;
        }
        setMovies(results);
      } catch {
        setError(true);
        alert("Something went wrong please reload again!");
      } finally {
        setIsLoading(false);
      }
    }
    getMovie();
  }, [searchQuery]);

  return (
    <div>
      {isLoading && <p className={css.loading}>Loading movies...</p>}
      {error && (
        <p className={css.texterror}>
          Whoops there was an error, please reload the page!{" "}
        </p>
      )}
      <SearchInput onSearch={handleSearchMovie} searchQuery={searchQuery} />
      {movies.length > 0 && <MovieList movies={movies} />}
    </div>
  );
}
