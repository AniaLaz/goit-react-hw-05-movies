import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const KEY = '5b1449ced393d87bc0a1ea0f9fb4bc3e';
const BASEURL_ACTOR = 'https://api.themoviedb.org/3/movie/';

export const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  


  useEffect(() => {
    async function fetchMoviesDetails() {
      try {
        await fetch(`${BASEURL_ACTOR}${movieId}/reviews?api_key=${KEY}`)
          .then(response => {
            if (!response.ok) {
              throw new Error(response.status);
            }
            return response.json();
          })
          .then(data => {
            setReviews(data.results);
            
          });
      } catch {
        window.alert('щось пішло не так');
      }
    }
    fetchMoviesDetails();
  }, [movieId]);
  return (
    <div>

      {reviews.length > 0 ? (
        <ul>
          {reviews.map(({ author, content }) => (
            <li key={author}>
              <div>{author}</div>
              <div> {content}</div>
            </li>
          ))}
        </ul>
      ) : (
        <div>not info</div>
      )}
    </div>
  );
};
