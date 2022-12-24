import { useState, useEffect } from 'react';
import {
  Link,
  Outlet,
  useParams,
  useLocation,
  NavLink,
} from 'react-router-dom';

export const KEY = '5b1449ced393d87bc0a1ea0f9fb4bc3e';
export const BASEURL_MOVIES_DETALIS = 'https://api.themoviedb.org/3/movie/';

export const MoviesDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const location = useLocation();
  console.log('location', location.pathname);

  const goBack = location.state?.from ?? '/';
  // console.log(useParams());
  console.log(movieId);

  useEffect(() => {
    async function fetchMoviesDetails() {
      try {
        setIsLoading(true);
        await fetch(`${BASEURL_MOVIES_DETALIS}${movieId}?api_key=${KEY}`)
          .then(response => {
            if (!response.ok) {
              throw new Error(response.status);
            }
            return response.json();
          })
          .then(data => {
            setMovie(data);
            console.log(data);
                   });
      } catch {
        window.alert('щось пішло не так');
      } finally {
        setIsLoading(false);
      }
    }
    fetchMoviesDetails();
  }, [movieId]);

  console.log('movie', movie);

  return (
    <div>
      <button type="button">
        <NavLink to={goBack} >Go back</NavLink>
      </button>
      {movie && (
        <div>
          <h3>{movie.title}</h3>
          <img
            src={`https://www.themoviedb.org/t/p/w200${movie.poster_path}`}
            alt={movie.title}
          />
          <div>UseScore: {movie.vote_average}</div>
          <div>
            <div>Overviem</div>
            <div>{movie.overview}</div>
          </div>
          <div>
            <div>Gerres</div>
            {movie.genres.map(({ id, name }) => (
              <div key={id}>{`${name}`}</div>
            ))}
          </div>
          <div></div>
        </div>
      )}
      <div>
        <h2></h2>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
};
