import { GoTriangleLeft, GoTriangleRight } from 'react-icons/go';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import StarRating from '../StarRating';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Autoplay } from 'swiper/modules';

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

const TopRated = ({ data }) => {
  return (
    <div className=" lg:hidden ">
      <div className="absolute">
        <h3 className="heading-2">Top Rated</h3>
      </div>

      <Swiper
        modules={[Autoplay]}
        slidesPerView={'auto'}
        autoplay={{ delay: 1700 }}
        className="w-full z-30 pt-32"
      >
        {data.slice(0, 10).map((item, index) => (
          <SwiperSlide key={index} className="flex justify-center w-[95%]">
            <div className="py-4 flex gap-8 items-center text-[1.2rem] w-full">
              <img
                src={item.img}
                alt=""
                className=" h-[20rem] rounded-[2.4rem]"
              />

              <div className="flex flex-col gap-6">
                <h5 className="text-[1.6rem] font-semibold">{item?.title}</h5>
                <div className="flex gap-4">
                  <p className="">{item?.year}</p>
                  <p className="">{item?.genre}</p>
                </div>
                <StarRating rating={item?.rating} />
                {/* <div className="flex gap-4 items-center">
                  <p className="">{item?.rating}</p>
                  <div className="flex">
                    <FaStar className="text-[#ffcb00]" />
                    <FaStar className="text-[#ffcb00]" />
                    <FaStar className="text-[#ffcb00]" />
                    <FaStar className="text-[#ffcb00]" />
                    <FaStar className="text-[#ffcb00]" />
                  </div>
                </div> */}
              </div>
            </div>
          </SwiperSlide>
        ))}

        <SliderButton />
      </Swiper>
    </div>
  );
};

export default TopRated;
