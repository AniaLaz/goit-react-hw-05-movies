import { BASEURL_TRENDS, KEY } from './CommonKeyUrl';

export function fetchFilmsTrends() {
  return fetch(`${BASEURL_TRENDS}?api_key=${KEY}`).then(
    response => {
      if (!response.ok) {
        throw new Error(response.status);
          }
      return response.json();
    }
  );
}