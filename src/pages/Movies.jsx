import Sidebar from '../components/Sidebar';
import Carousel from '../components/movies/Carousel';
import Movie from '../components/movies/Movie';
import { movies } from '../constants';
import { GoTriangleLeft, GoTriangleRight } from 'react-icons/go';
import TopRated from '../components/movies/TopRated';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';

const Movies = () => {
  return (
    <section className="w-screen flex py-36 ">
      <div className="w-full sm:w-[75%] px-0 sm:px-10 pt-8 ">
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination, Autoplay]}
          autoplay={{ delay: 1700 }}
          className="mySwiper"
        >
          {movies.slice(0, 3).map((item, index) => (
            <SwiperSlide key={index}>
              <Carousel {...item} />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="px-6 pb-10">
          <div className="flex justify-between items-center">
            <h2 className="heading-2">Latest Movies</h2>
            <div className="flex text-[3.6rem]">
              <GoTriangleLeft className="cursor-pointer" />
              <GoTriangleRight className="cursor-pointer" />
            </div>
          </div>

          <div className="flex gap-8 w-full overflow-x-scroll">
            {movies.map((item, index) => (
              <Movie key={index} {...item} />
            ))}
          </div>

          <div className="flex justify-between items-center">
            <h2 className="heading-2">Recommended</h2>
            <div className="flex text-[3.6rem]">
              <GoTriangleLeft className="cursor-pointer" />
              <GoTriangleRight className="cursor-pointer" />
            </div>
          </div>
          <div className="flex gap-8 w-full overflow-x-scroll">
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

          <TopRated data={movies} />
        </div>
      </div>

      <Sidebar data={movies} />
    </section>
  );
};

export default Movies;
