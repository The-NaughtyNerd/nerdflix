import { genres } from '../constants';
import { mainMovie } from '../assets';
import { FaStar } from 'react-icons/fa';

const Sidebar = ({ data }) => {
  return (
    <div className="w-[25%] h-full fixed right-0 bg-[#313131] px-10 overflow-scroll">
      <div className="py-8 grid grid-cols-2 gap-y-6 gap-x-6 ">
        <h3 className="text-[1.8rem] font-bold">Genre</h3>
        <p className="text-right font-bold text-[1.2rem]">More</p>
        {genres.map((genre) => (
          <p
            key={genre.id}
            className="py-2 px-10 bg-[#131313] text-center rounded-full"
          >
            {genre.name}
          </p>
        ))}
      </div>
      <div className="py-8 ">
        <h3 className="text-[1.8rem] font-bold">Top Rated</h3>

        <div className="flex flex-col mb-[8rem]">
          {data.map((item, index) => (
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
                <div className="flex gap-4 items-center">
                  <p className="">{item?.rating}</p>
                  <div className="flex">
                    <FaStar className="text-[#ffcb00]" />
                    <FaStar className="text-[#ffcb00]" />
                    <FaStar className="text-[#ffcb00]" />
                    <FaStar className="text-[#ffcb00]" />
                    <FaStar className="text-[#ffcb00]" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
