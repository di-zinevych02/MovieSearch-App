import { useState, useEffect } from "react";
import { useSearchParams } from "react-router";
import SearchInput from "../components/SearchInput/SearchInput";
import { fetchSearchMovies } from "../APITmdb";
import MovieList from "../components/MovieList/MovieList";
import Loader from "../components/Loader/Loader";
import ErrorMessage from "../components/ErrorMessage/ErrorMessage";

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  //можливість отримати доступ до параметрів частини лінка
  const [searchParams, setSearchParams] = useSearchParams();
  //отримуємо поточне значення параметрів
  const query = searchParams.get("query") ?? "";
  const [searchQuery, setSearchQuery] = useState(query);


  useEffect(() => {
          if (!searchQuery)
        return;
    async function getMovies() {
      try {
        setIsLoading(true);
        setError(false);
        const data = await fetchSearchMovies(searchQuery);
        if (data.length === 0) {
          alert(
            "Sorry, there are no images matching your search query. Please try again!"
          );
          return;
        }
        setMovies(data);
      } catch {
        setError(true);
        alert("Something went wrong please reload again!");
      } finally {
        setIsLoading(false);
      }
    }
    getMovies();
  }, [searchQuery]);
  

  const handleSubmit = (values) => {
    //Користувач не зможе відправити рядок, який містить лише пробіли.
    const trimmedQuery = values.searchQuery.trim();
    if (trimmedQuery === "") {
      alert("Please enter a search term!");

      return;
    }
    //зробили копію параметрів, щоб змінювати їх
    const nextParams = new URLSearchParams(searchParams);
    //змінили копію параметрів на значення яке ввели в поле пошуку
    nextParams.set("query", trimmedQuery);
    //передали копію в юрл, щоб зберігати пошуковий запит у URL, дозволяючи змінювати сторінку і ділитися посиланням
        setSearchParams(nextParams);
setSearchQuery(trimmedQuery);
  };


  return (
    <div>    
      <SearchInput
        onSearch={handleSubmit}
        searchQuery={searchQuery}
      />
      {isLoading && <Loader />}
      {error && <ErrorMessage error={error} />}
      {movies.length > 0 && <MovieList movies={movies} />}
    </div>
  );
}
