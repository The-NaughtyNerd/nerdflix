import { FaStar } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import StarRating from '../StarRating';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';

const TopRated = ({ data }) => {
  return (
    <div className="block md:hidden ">
      <h3 className="heading-2">Top Rated</h3>

      {/* <div className="flex flex-col mb-[8rem] w-full"> */}
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {data.map((item, index) => (
          <SwiperSlide key={index}>
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
      </Swiper>
      {/* </div> */}
    </div>
  );
};

export default TopRated;
