import { useState, useEffect } from 'react';
import {
  useParams,
  useLocation,
} from 'react-router-dom';
import css from '../Cast/Cast.module.css';

  const KEY = '5b1449ced393d87bc0a1ea0f9fb4bc3e';
  const BASEURL_ACTOR = 'https://api.themoviedb.org/3/movie/';


export const Cast = () => {


  const { movieId } = useParams();
  const [actors, setActors] = useState([]);
  const location = useLocation();
  const goBack = location.state?.from ?? '/';

  useEffect(() => {
    async function fetchMoviesDetails() {
      try {
        await fetch(`${BASEURL_ACTOR}${movieId}/credits?api_key=${KEY}`)
          .then(response => {
            if (!response.ok) {
              throw new Error(response.status);
            }
            return response.json();
          })
          .then(data => {
            setActors(data.cast);
                });
      } catch {
        window.alert('щось пішло не так');
      }
    }
    fetchMoviesDetails();
  }, [movieId]);

  
  return (
    <div>
      {actors.length > 0 ? (
        <ul>
          {actors.map(({ id, name, profile_path, character }) => (
            <li key={id} className={css.list}>
              <img
                className={css.imgAutor}
                src={`https://www.themoviedb.org/t/p/w200${profile_path}`}
                alt={name}
              />
              <div className={css.actorName}>{name}</div>
              <div>Character: {character}</div>
            </li>
          ))}
        </ul>
      ) : (
        <div>not info</div>
      )}
    </div>
  );
};
