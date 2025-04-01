import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchMovieCredits } from "../../APITmdb";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import css from "./MovieCast.module.css"
export default function MovieCast() {
    // отримуємо ID з URL
    const { movieId } = useParams();
    const [casts, setCasts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        async function getCasts() {
            try {
                setIsLoading(true);
                setError(false);
                //функція, яка отримує дані про каст фільму по конкретному айдішніку фільма
                const data = await fetchMovieCredits(movieId);
                //вдповідь з бекенду повертаємо масив каст
                setCasts(data);
                
            } catch {
                setError(true);
                alert("Something went wrong please reload again!");
                
            } finally {
                setIsLoading(false);
            }
        }
        getCasts();
    }, [movieId]);
    return (
        <div className={css.container}>
            {isLoading && <Loader />}
            {error && <ErrorMessage error={error} />}
            <ul className={css.listcast}>
                {casts ? (
                    casts.map((cast) => (
                        <li key={cast.id} className={css.itemcast}>
                            <img className={css.imgCast}
                                src={`https://image.tmdb.org/t/p/w500${cast.profile_path}`}
                                alt={cast.name}
                            />
                            <p className={css.textcast}>{cast.name}
                            </p>
                            <p className={css.textcast}>Character: {cast.character}</p>
                        </li>
                    ))
                ) : (
                        <p className={css.errorinfo}>No cast information available.</p>
                )}
            </ul>
        </div>
    );
}
