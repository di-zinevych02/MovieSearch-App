import { useLocation, useParams, Link } from "react-router-dom";
import { useEffect, useRef, useState} from "react";
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
    const location = useLocation();
    // для передачі збереженого значення юрл між оновленням компонента,куди прийшли. не реалініціалізується
    const backLinkRef = useRef(location.state ?? "/movies");
    
    
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
            <Link to={backLinkRef.current}>Go Back</Link>
            {movie && <MovieDetail movie={movie} />}           
        </div>
    );
}