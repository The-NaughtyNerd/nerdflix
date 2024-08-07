import { FaStar } from 'react-icons/fa';
import { PiLineVerticalLight } from 'react-icons/pi';

const Movie = ({ img, title, year, rating }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: 'cover',
      }}
      // className=" w-[24rem] h-[24rem] md:w-[26rem] md:h-[26rem] rounded-[1.8rem] flex items-end"
      className=" min-w-[20rem] h-[24rem] rounded-[1.8rem] flex items-end"
    >
      {/* <div className="backdrop-filter backdrop-blur-sm bg-white object-cover min-w-max w-full p-5 bg-opacity-30  rounded-b-[1.8rem] rounded-t-[1.8rem] flex items-center md:justify-between text-[#f3f3f3f3] "> */}
      <div className="backdrop-filter backdrop-blur-sm bg-white w-full py-5 px-8 md:px-5 bg-opacity-30  rounded-b-[1.8rem] rounded-t-[1.8rem] flex items-center justify-between text-[#f3f3f3f3] ">
        <div className="">
          <h5 className="font-bold text-[1.4rem]">{title}</h5>
          <p className="text-[1.2rem]">{year}</p>
        </div>

        <div className="flex items-center gap-2">
          <PiLineVerticalLight className=" text-[2.8rem]" />
          <FaStar className="" />
          <p className="text-[1.2rem]">{rating}</p>
        </div>
      </div>
    </div>
  );
};

export default Movie;
