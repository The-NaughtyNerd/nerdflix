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
    <div className=" absolute bg-red-600 top-10 right-20 flex text-[2.4rem] z-10">
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
    <div>
      <h2 className="heading-2">{detail}</h2>

      {/* <div className="flex justify-between items-center">
        <h2 className="heading-2">{detail}</h2>
        <div className="relative right-14 text-[3.6rem] bg-red-600">
          <SliderButton />
        </div>
      </div> */}
      <Swiper
        slidesPerView={'auto'}
        spaceBetween={15}
        modules={[Navigation, Autoplay]}
        // autoplay={{ delay: 1700 }}
        className="w-full"
      >
        <SliderButton />

        {movieType.map((item, index) => (
          <SwiperSlide
            key={index}
            style={{
              width: '18rem',
            }}
          >
            <Movie {...item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MoviesSlider;
