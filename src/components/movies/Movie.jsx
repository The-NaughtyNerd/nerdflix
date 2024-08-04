import { movieImg1, movieImg2, mainMovie } from '../../assets';
import { FaStar } from 'react-icons/fa';
import { PiLineVerticalLight } from 'react-icons/pi';

const Movie = ({ img, title, year, rating }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: 'cover',
      }}
      className="w-[30rem] h-[26rem] rounded-[1.8rem] flex items-end"
    >
      <div className="backdrop-filter backdrop-blur-sm bg-white object-cover  w-full h-[25%] bg-opacity-50 px-4 rounded-b-[1.8rem] rounded-t-[1.8rem] flex items-center justify-between text-[#f3f3f3f3] ">
        <div className="">
          <h5 className="font-bold text-[1.3rem]">{title}</h5>
          <p className="text-[1.2rem]">{year}</p>
        </div>

        <div className="flex items-center gap-2">
          <PiLineVerticalLight className=" text-[2.8rem]" />
          <FaStar className="text-[#ffcb00]" />
          <p className="text-[1.2rem]">{rating}</p>
        </div>
      </div>
    </div>
  );
};

export default Movie;
