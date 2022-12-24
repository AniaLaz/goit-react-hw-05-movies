import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

export const KEY = '5b1449ced393d87bc0a1ea0f9fb4bc3e';
export const BASEURL_TRENDS = 'https://api.themoviedb.org/3/trending/movie/day';

export const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    async function fetchFilmsTrends() {
      try {
        setIsLoading(true);
        await fetch(`${BASEURL_TRENDS}?api_key=${KEY}`)
          .then(response => {
            if (!response.ok) {
              throw new Error(response.status);
            }
            return response.json();
          })
          .then(data => {
            setMovies(data.results);
          });
      } catch {
        window.alert('щось пішло не так');
      } finally {
        setIsLoading(false);
      }
    }
    fetchFilmsTrends();
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      {isLoading && <div>Loading...</div>}
      {movies.length > 0 && (
        <ul>
          {movies.map(({ id, title }) => (
            <li key={id}>
              <Link to={`movies/${id}`} state={{ from: location }}>
                {title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
