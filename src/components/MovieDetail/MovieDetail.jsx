import css from "./MovieDetail.module.css";
import Loader from "../Loader/Loader";
import clsx from "clsx";
import {Suspense, useRef } from "react";
import { Outlet, NavLink, Link, useLocation } from "react-router-dom";
import { CiImageOff } from "react-icons/ci";

const getLinkStyles = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
};
export default function MovieDetail({ movie }) {
     const location = useLocation();
        // для передачі збереженого значення юрл між оновленням компонента,куди прийшли. не реалініціалізується
        const backLinkRef = useRef(location.state ?? "/movies");
        
    return (
        <div className={css.container}>
            <Link to={backLinkRef.current} className={css.backbtn}>Go Back</Link>
            <div className={css.containermovie}>
            <div className={css.containerimg}>
            {movie.poster_path ? ( <img
                className={css.poster}
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                />) : ( <CiImageOff className={css.imgmovienone}/>
                                                    
                                            )}
</div>
            <div className={css.containerdescr}>
            <h2 className={css.titlemovie}>{movie.title}</h2>
            <div className={css.movielist}>
                <h3 className={css.titledescription}>User Score: <span className={css.description}>{Math.round(movie.vote_average * 10)}%</span></h3>
            </div>

            <div className={css.movielist}>
                <h3 className={css.titledescription}>Overview: <span className={css.description}>{movie.overview}</span></h3>

            </div>

            <div className={css.movielist}>
                <h3 className={css.titledescription}>Genres: <span className={css.description}>{movie.genres.map((genre) => genre.name).join(" / ") || "Genres unknown"}</span></h3>

            </div>
                </div>
                </div>
              <div className={css.movielistlink}>
                <h4 className={css.addinfo}>Additional information</h4>
                <ul className={css.infolist}>
                    <li className={css.infoitem}>
                        <NavLink className={getLinkStyles} to="cast">Cast</NavLink>
                    </li>
                    <li className={css.infoitem}>
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