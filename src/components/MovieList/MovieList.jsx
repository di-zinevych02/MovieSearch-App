// import { fetchTrendingMovies } from "../../apiTmdb";
import clsx from "clsx";
import css from "./MovieList.module.css";

import { NavLink, useLocation } from "react-router-dom";

const getLinkStyle = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export default function MovieList({ movies }) {
  //збергігаємо об*єкт місцеположення, можливість передати поточний юрл у наступний маршут
  const location = useLocation();
  return (
    <ul className={css.list}>
      {movies.map((movie) => (
        <li key={movie.id}>
          <NavLink
            className={getLinkStyle}
            to={`/movies/${movie.id}`}
            //використовується для збереження інформації про попередню сторінку.
            state={{ from: location }}
          >
            <h3 className={css.moviename}>{movie.name ?? movie.title}</h3>
          </NavLink>
        </li>
      ))}
    </ul>
  );
}
