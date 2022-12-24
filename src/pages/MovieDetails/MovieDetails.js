import { useState, useEffect } from 'react';
import {
  Link,
  Outlet,
  useParams,
  useLocation,
  NavLink,
} from 'react-router-dom';
import css from '../MovieDetails/MoviesDetails.module.css';

export const KEY = '5b1449ced393d87bc0a1ea0f9fb4bc3e';
export const BASEURL_MOVIES_DETALIS = 'https://api.themoviedb.org/3/movie/';

export const MoviesDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  // const [isLoading, setIsLoading] = useState(false);

  const location = useLocation();


  const goBack = location.state?.from ?? '/';
  // console.log(useParams());


  useEffect(() => {
    async function fetchMoviesDetails() {
      try {
        // setIsLoading(true);
        // console.log('isLoading', isLoading);
        await fetch(`${BASEURL_MOVIES_DETALIS}${movieId}?api_key=${KEY}`)
          .then(response => {
            if (!response.ok) {
              throw new Error(response.status);
            }
            return response.json();
          })
          .then(data => {
            setMovie(data);
                   });
      } catch {
        window.alert('щось пішло не так');
      } finally {
        // setIsLoading(false);
        // console.log('isLoading', isLoading);
      }
    }
    fetchMoviesDetails();
  }, [movieId]);

 
  return (
    <div>
      <button type="button">
        <NavLink to={goBack}>Go back</NavLink>
      </button>
      {movie && (
        <div className={css.cart}>
          <h3>{movie.title}</h3>
          <div className={css.info}>
            <img
              className={css.img}
              src={`https://www.themoviedb.org/t/p/w200${movie.poster_path}`}
              alt={movie.title}
            />
            <div>
              <div className={css.block}>
                <div className={css.title}>UseScore:</div> {movie.vote_average}
              </div>
              <div className={css.block}>
                <div className={css.title}>Overviem</div>
                <div>{movie.overview}</div>
              </div>
              <div>
                <div className={css.title}>Gerres</div>
                {movie.genres.map(({ id, name }) => (
                  <div key={id}>{`${name}`}</div>
                ))}
              </div>
            </div>
          </div>
          <div></div>
        </div>
      )}
      <div>
        <ul className={css.listMovieInfo}>
          <li>
            <Link to="cast" state={{ from: location }} className={css.link}>
              Cast
            </Link>
          </li>
          <li>
            <Link to="reviews" state={{ from: location }} className={css.link}>
              Reviews
            </Link>
          </li>
        </ul>
      </div>

      <Outlet />
    </div>
  );
};
