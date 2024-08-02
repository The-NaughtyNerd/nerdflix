import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Animations from './pages/Animations';
import Movies from './pages/Movies';
import TvShows from './pages/TvShows';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Movies />} />
        <Route path="/tv-shows" element={<TvShows />} />
        <Route path="/animations" element={<Animations />} />
      </Routes>
    </>
  );
};

export default App;
