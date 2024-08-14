import Sidebar from '../components/Sidebar';
import Carousel from '../components/movies/Carousel';
import Movie from '../components/movies/Movie';
import { movies } from '../constants';
import { GoTriangleLeft, GoTriangleRight } from 'react-icons/go';
import TopRated from '../components/movies/TopRated';
import MoviesSlider from '../components/movies/MoviesSlider';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';

import { useEffect } from 'react';

const Movies = () => {
  return (
    <section className="w-screen flex py-28 pb-36 ">
      <div className="w-full lg:w-[75%] px-0 lg:px-10 pt-8 ">
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination, Autoplay]}
          autoplay={{ delay: 1700 }}
          className="relative"
        >
          {movies.slice(0, 3).map((item, index) => (
            <SwiperSlide key={index}>
              <Carousel {...item} />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="px-6 pb-10">
          <MoviesSlider movieType={movies} detail={'Latest Movies'} />

          <MoviesSlider movieType={movies} detail={'Recommended'} />

          <TopRated data={movies} />
        </div>
      </div>

      <Sidebar data={movies} />
    </section>
  );
};

export default Movies;
