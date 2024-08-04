import Sidebar from '../components/Sidebar';
import Carousel from '../components/movies/Carousel';
import Movie from '../components/movies/Movie';
import { movies } from '../constants';

const Movies = () => {
  return (
    <section className="w-full flex py-36">
      <div className="w-[75%] px-10 py-8">
        <Carousel />
        <h2 className="heading-2">Recommended</h2>
        <div className="flex gap-8">
          {movies.map((movie) => (
            <Movie
              key={movie.id}
              img={movie.img}
              title={movie.title}
              year={movie.year}
              rating={movie.rating}
            />
          ))}
        </div>
        <h2 className="heading-2">Latest Movies</h2>
        <div className="flex gap-8">
          {movies.map((movie) => (
            <Movie
              key={movie.id}
              img={movie.img}
              title={movie.title}
              year={movie.year}
              rating={movie.rating}
            />
          ))}
        </div>
      </div>

      <Sidebar data={movies} />

      {/* <Sidebar /> */}
    </section>
  );
};

export default Movies;
