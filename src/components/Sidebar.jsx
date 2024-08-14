import { genres } from '../constants';
import { FaStar } from 'react-icons/fa';
import StarRating from './StarRating';
import { useState, useEffect } from 'react';

const Sidebar = ({ data }) => {
  const [active, setActive] = useState('All');

  return (
    <div className="hidden lg:block w-[25%] h-full fixed right-0 bg-[#313131] px-10 overflow-scroll pt-8">
      <h3 className="py-4 text-[1.8rem] font-bold">Genre</h3>
      <div className="py-8 grid grid-cols-2 gap-y-6 gap-x-8  ">
        {genres.map((genre) => (
          <div
            key={genre.id}
            onClick={() => {
              setActive(genre.name);
            }}
            className={`md:py-2 md:px-6 xl:py-2 xl:px-10 hover:bg-black w-fit text-center rounded-full cursor-pointer ${
              active === genre.name ? 'bg-[#000]' : 'bg-[#131313]'
            } `}
          >
            <p>{genre.name}</p>
          </div>
        ))}
      </div>

      <div className="py-8 ">
        <h3 className="text-[1.8rem] font-bold">Top Rated</h3>

        <div className="flex flex-col mb-[8rem]">
          {data.slice(0, 10).map((item, index) => (
            <div
              key={index}
              className="py-4 flex gap-6 items-center text-[1.2rem]"
            >
              <img
                src={item.img}
                alt=""
                className=" h-[14rem] rounded-[2.4rem]"
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
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
