import { useLocation, useParams } from "react-router-dom";
import { useEffect, useState} from "react";
import { fetchMoviesDetails } from "../APITmdb";
import Loader from "../components/Loader/Loader";
import ErrorMessage from "../components/ErrorMessage/ErrorMessage";
import MovieDetail from "../components/MovieDetail/MovieDetail"




export default function MovieDetailsPage() { 
    // отримуємо ID з URL
    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);
   
    
    useEffect(() => {
        async function getMovie() {
            try {
                setIsLoading(true);
            setError(false);
                const data = await fetchMoviesDetails(movieId);
                setMovie(data);
            } catch {
                setError(true);
                alert("Something went wrong please reload again!");
            } finally {
                setIsLoading(false);
            }
        }
        getMovie();
    }, [movieId]);
    return (
        <div>
            {isLoading && <Loader />}
            {error && <ErrorMessage error={error} />}
            
            {movie && <MovieDetail movie={movie} />}           
        </div>
    );
}