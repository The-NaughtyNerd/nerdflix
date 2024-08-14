import { GoTriangleLeft, GoTriangleRight } from 'react-icons/go';
import Movie from './Movie';

import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';

const SliderButton = () => {
  const swiper = useSwiper();

  return (
    <div className="absolute top-10 right-5 flex text-[3.2rem] z-[100]">
      <GoTriangleLeft
        onClick={() => swiper.slidePrev()}
        className=" cursor-pointer"
      />
      <GoTriangleRight
        onClick={() => swiper.slideNext()}
        className=" cursor-pointer"
      />
    </div>
  );
};

const MoviesSlider = ({ movieType, detail }) => {
  return (
    <div className="relative">
      <div className="absolute">
        <h2 className="heading-2 ">{detail}</h2>
      </div>

      <Swiper
        slidesPerView={'auto'}
        spaceBetween={15}
        modules={[Navigation, Autoplay]}
        // autoplay={{ delay: 1700 }}
        className="w-full z-30 pt-32"
      >
        {movieType.map((item, index) => (
          <SwiperSlide
            key={index}
            style={{
              width: '18rem',
            }}
            className=""
          >
            <Movie {...item} />
          </SwiperSlide>
        ))}

        <SliderButton />
      </Swiper>
    </div>
  );
};

export default MoviesSlider;
