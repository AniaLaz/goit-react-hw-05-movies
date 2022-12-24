import { lazy, Suspense } from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
// import { Home } from '../../pages/Home/Home';
// import { Movies } from '../../pages/Movies/Movies';
import { NotFound } from '../../pages/NotFound/NotFound';
// import { MoviesDetails } from '../../pages/MovieDetails/MovieDetails';
import { Cast } from '../Cast/Cast';
import { Reviews } from '../Reviews/Reviews';
import styled from 'styled-components';
import css from '../App/App.module.css';

const Home = lazy(() =>
  import('../../pages/Home/Home').then(module => {
    return {
      ...module,
      default: module.Home,
    };
  })
);

const Movies = lazy(() => import('../../pages/Movies/Movies').then(module => {
  return {
    ...module,
    default: module.Movies,
  };
}));
const MoviesDetails = lazy(() =>
  import('../../pages/MovieDetails/MovieDetails').then(module => {
    return {
      ...module,
      default: module.MoviesDetails,
    };
  })
);

const StyledLink = styled(NavLink)`
  color: black;
  margin-right: 50px;


  &.active {
    color: red;
  }
`;
const Styled = styled('div')`
  width: 90vw;

  display: block;
  margin: auto;
`;
export const App = () => {
  return (
    <div>
      <nav className={css.nav}>
        <StyledLink to="/" end>
          Home
        </StyledLink>
        <StyledLink to="/movies">Movies</StyledLink>
      </nav>
      <Styled>
        <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MoviesDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
        </Suspense>
      </Styled>
    </div>
  );
};
