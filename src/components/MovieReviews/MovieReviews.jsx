import css from "./MovieReviews.module.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchMovieReviews } from "../../APITmdb";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

export default function MovieCast() {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        async function getReviews() {
            try {
                setIsLoading(true);
                setError(false);
                const data = await fetchMovieReviews(movieId);
                setReviews(data);
            }
            catch {
                setError(true);
                alert("Something went wrong please reload again!");
            } finally {
                setIsLoading(false);
            }
        }
        getReviews();
    }, [movieId]);
    return (
        <div className={css.container}>
            {isLoading && <Loader />}
            {error && <ErrorMessage error={error} />}
            <ul className={css.listreview}>
                {reviews.length ? (
                    reviews.map((review) => (
                        <li key={review.id} className={css.itemreview}>
                            <h4 className={css.author}>Author: {review.author}</h4>
                            <p className={css.review}>{review.content}</p>
                        </li>
                    ))
                ) : (
                        <p className={css.errorinfo}>We don't have any reviews for this movie.</p>
                )}
            </ul>
        </div>
    );
}