import Sidebar from '../components/Sidebar';
import Carousel from '../components/movies/Carousel';
import Movie from '../components/movies/Movie';

const TvShows = () => {
  return (
    <section className="w-full flex py-36">
      <div className="w-[75%] px-10 py-8">
        <Carousel />
        <h2 className="font-bold text-[2rem]">Recommended</h2>
        <h2 className="font-bold text-[2rem]">Latest Tv Shows</h2>
      </div>
      <Sidebar />
    </section>
  );
};

export default TvShows;
