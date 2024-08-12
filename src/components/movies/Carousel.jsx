import { mainMovie } from '../../assets';
import { LuDot } from 'react-icons/lu';
import { GoTriangleDown } from 'react-icons/go';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const Carousel = ({ img, title, year, genre, watchtime }) => {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${img}) `,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      className="w-full h-[50vh] md:h-[50vh] md:rounded-[4rem] flex items-end "
    >
      <div className="backdrop-filter backdrop-blur-sm bg-[#111111] bg-opacity-40 w-full p-8 flex flex-col justify-end items-start rounded-t-[2rem] gap-6 md:gap-0 md:flex-row md:justify-between md:items-end md:p-16 md:rounded-none md:backdrop-filter-none md:backdrop-blur-none md:bg-none md:bg-opacity-0">
        <div className="">
          <h1 className="text-[2.8rem]  font-bold uppercase tracking-[0.5rem]">
            {title}
          </h1>
          <div className="flex gap-2 items-center">
            <h5>{year}</h5>
            <LuDot />
            <h5>{genre}</h5>
            <LuDot />
            <h5>{watchtime}</h5>
          </div>
        </div>

        <div className="flex gap-2">
          <button className="bg-red-600 py-2 px-16 rounded-3xl hover:bg-red-800">
            Watch
          </button>
          <div className="bg-white bg-opacity-50 p-2 rounded-full">
            <GoTriangleDown size={28} className="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
