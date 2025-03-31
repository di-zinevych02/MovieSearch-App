
import css from "./MovieList.module.css";

import {Link, useLocation } from "react-router-dom";

export default function MovieList({ movies }) {
  //збергігаємо об*єкт місцеположення, можливість передати поточний юрл у наступний маршут
  const location = useLocation();
  return (
     <div className={css.container}>
    <ul className={css.list}>
      {movies.map((movie) => (
        <li key={movie.id}>
          <Link
            to={`/movies/${movie.id}`}
            //використовується для збереження інформації про попередню сторінку.
            state={{ from: location }}
          >
            <img
              className={css.movieImg}
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            /> 
            <h3 className={css.moviename}>{movie.name ?? movie.title}</h3>                      
          </Link>
        </li>
      ))}
    </ul>
   </div>
  );
}
