import { FaStar } from 'react-icons/fa';
import { PiLineVerticalLight } from 'react-icons/pi';
import { Link } from 'react-router-dom';

const Movie = ({ id, img, title, year, rating }) => {
  return (
    // <Link to={`/pages/${'movies' || 'tvshows'}/detail/${title}`}>
    <Link to={`/detail/${title}`}>
      <div
        // onClick={() => {
        //   getMovieDetails(id);
        //   navigate(`./movie-page/${title}`);
        // }}
        style={{
          backgroundImage: `url(${img})`,
          backgroundSize: 'cover',
        }}
        // className=" w-[24rem] h-[24rem] md:w-[26rem] md:h-[26rem] rounded-[1.8rem] flex items-end"
        className="  h-[24rem]  rounded-[1.8rem] flex items-end"
      >
        <div className="backdrop-filter backdrop-blur-sm bg-black w-full py-5 px-8 md:px-5 bg-opacity-30  rounded-b-[1.8rem] rounded-t-[1.8rem] flex items-center justify-between text-[#f3f3f3f3] ">
          <div className="">
            <h5 className="font-bold text-[1.4rem] line-clamp-1">{title}</h5>
            <p className="text-[1.2rem]">{year}</p>
          </div>

          <div className="flex items-center gap-2">
            <PiLineVerticalLight className=" text-[2.8rem]" />
            <FaStar className="" />
            <p className="text-[1.2rem]">{rating}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Movie;
