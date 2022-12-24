import { SearchBox } from '../../components/SearchBox/SearchBox';
import { useEffect, useState } from 'react';
import { useSearchParams, Link, useLocation } from 'react-router-dom';

export const KEY = '5b1449ced393d87bc0a1ea0f9fb4bc3e';
export const BASEURL_Movies = 'https://api.themoviedb.org/3/search/movie';

export const Movies = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [searchParam, setSearchParam] = useSearchParams();
  const filter = searchParam.get('filter') ?? '';
  console.log(filter);

   const location = useLocation();

  useEffect(() => {
    if (filter !== '') {
      async function fetchFilms() {
        try {
          setIsLoading(true);
          await fetch(
            `https://api.themoviedb.org/3/search/movie?api_key=${KEY}&query=${filter}&page=`
          )
            .then(response => {
              if (!response.ok) {
                throw new Error(response.status);
              }
              // console.log(response);
              return response.json();
            })
            .then(data => {
              setMovies(data.results);
              console.log(data.results);
            });
        } catch {
          window.alert('щось пішло не так');
        } finally {
          setIsLoading(false);
        }
      }
      fetchFilms();
    }
    setMovies([]);
  }, [filter]);

  // const onChange = value => {
  //   setSearchParam(value !== '' ? { filter: value } : {});
  // };

  // const onSubmit = (e) => {
  // e.preventDefault();
  //   console.log('onSubmit', e);
  // }

    const handleSubmit = e => {
      e.preventDefault();

      const value = e.target.film.value;
      setSearchParam(value !== '' ? { filter: value } : {});
    };

  return (
    <div>
      <SearchBox onSubmit={handleSubmit} />
      {isLoading && <div>Loading...</div>}
      {movies.length > 0 && (
        <ul>
          {movies.map(({ id, title }) => (
            <li key={id}>
              <Link to={`${id}`} state={{ from: location }}>
                {title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
