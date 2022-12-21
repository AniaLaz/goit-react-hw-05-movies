import { BASEURL_TRENDS, KEY } from './CommonKeyUrl';

export function fetchFilmsTrends(page) {
  return fetch(`${BASEURL_TRENDS}?api_key=${KEY}&page=${page}`).then(
    response => {
      if (!response.ok) {
        throw new Error(response.status);
          }
      return response.json();
    }
  );
}