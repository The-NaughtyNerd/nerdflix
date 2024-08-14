import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Animations from './pages/Animations';
import Movies from './pages/Movies';
import TvShows from './pages/TvShows';
import MovieDetail from './pages/MovieDetail';

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route exact path="/" element={<Movies />} />
        <Route path="/tvshows" element={<TvShows />} />
        <Route path="/animations" element={<Animations />} />
        <Route path="/:id" element={<MovieDetail />} />
      </Routes>
    </>
  );
};

export default App;
