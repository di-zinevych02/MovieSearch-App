import css from "./MovieDetail.module.css";
import Loader from "../Loader/Loader";
import clsx from "clsx";
import {Suspense } from "react";
import { Outlet, NavLink } from "react-router-dom";

const getLinkStyles = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
};
export default function MovieDetail({ movie }) {
    
    return (
        <div className={css.container}>
            <img
                className={css.poster}
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
            />
            <h2 className={css.titlemovie}>{movie.title}</h2>
            <div className={css.movielist}>
                <h3 className={css.titledescription}>User Score:</h3>
                <p className={css.description}>{Math.round(movie.vote_average * 10)}%</p>
            </div>

            <div className={css.movielist}>
                <h3 className={css.titledescription}>Overview:</h3>
                <p className={css.description}>{movie.overview}</p>
            </div>

            <div className={css.movielist}>
                <h3 className={css.titledescription}>Genres:</h3>
                <p className={css.description}>{movie.genres.map((genre) => genre.name).join(" / ")}</p>
            </div>

              <div className={css.movielistLink}>
                <h4>Additional information</h4>
                <ul>
                    <li>
                        <NavLink className={getLinkStyles} to="cast">Cast</NavLink>
                    </li>
                    <li>
                        <NavLink className={getLinkStyles} to="reviews">Reviews</NavLink>
                    </li>
                </ul>
                <Suspense fallback={<Loader />}>
                    <Outlet />
                </Suspense>
            </div>
        </div>

    );

}