import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Animations from './pages/user-pages/animations/Animations';
import Movies from './pages/user-pages/movies/Movies';
import TvShows from './pages/user-pages/tvshows/TvShows';
import MovieDetail from './pages/user-pages/moviedetail/MovieDetail';
import LandingPage from './pages/landing-page/LandingPage';
import SignUp from './pages/sign-up/SignUp';
import SignIn from './pages/sign-in/SignIn';
import UserPages from './pages/user-pages/UserPages';

const App = () => (
  <>
    {/* <Navbar /> */}

    <Routes>
      <Route exact path="/" element={<LandingPage />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/pages" element={<UserPages />}>
        <Route index path="movies" element={<Movies />} />
        <Route path="tvshows" element={<TvShows />} />
        <Route path="animations" element={<Animations />} />
        {/* <Route
          path={`${'movies' || 'tvshows'}/detail/:title`}
          element={<MovieDetail />}
        /> */}
      </Route>
      <Route path="/detail/:title" element={<MovieDetail />} />
    </Routes>
  </>
);

export default App;
