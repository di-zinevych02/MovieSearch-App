
import css from "./MovieList.module.css";
import { CiImageOff } from "react-icons/ci";
import {Link, useLocation } from "react-router-dom";

export default function MovieList({ movies }) {
  //збергігаємо об*єкт місцеположення, можливість передати поточний юрл у наступний маршут
  const location = useLocation();
  return (
    <div className={css.container}>
    <ul className={css.list}>
      {movies.map((movie) => (
        <li key={movie.id} className={css.item}>
                    <Link
            to={`/movies/${movie.id}`}
            //використовується для збереження інформації про попередню сторінку звідки прийшли
            state={location}
          >
         {movie.poster_path ? ( <img
              className={css.movieImg}
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />) : (<CiImageOff className={css.imgmovienone}/>
                                                                
                                                        )}
            </Link>
          <Link
            to={`/movies/${movie.id}`}
            //використовується для збереження інформації про попередню сторінку звідки прийшли
            state={location}
          >
           
            <h3 className={css.moviename}>{movie.name ?? movie.title}</h3>                      
          </Link>
        </li>
      ))}
    </ul>
   </div>
  );
}
