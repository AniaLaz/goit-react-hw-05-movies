import { Routes, Route, NavLink } from 'react-router-dom';
import { Home } from '../../pages/Home/Home';
import { Movies } from '../../pages/Movies/Movies';
import { NotFound } from '../../pages/NotFound/NotFound';
import styled from 'styled-components';

console.log('styled',styled);

const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: red;
  }
`;

export const App = () => {
  return (
    <div>
      <nav>
        <StyledLink to="/" end>
          Home
        </StyledLink>
        <StyledLink to="/movies">Movies</StyledLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};














// import { Movies } from '../../pages/Movies';
// import { MoviesDetails } from '../../pages/MovieDetails';

// import { fetchFilmsTrends } from '../Fetch/Fetch';

// console.log(fetchFilmsTrends);
// const page = 1;

// export function GetTrendsFilms() {
//   fetchFilmsTrends(page).then(data => {
//     console.log(data.results[0].title);
//   });
// }
// GetTrendsFilms();