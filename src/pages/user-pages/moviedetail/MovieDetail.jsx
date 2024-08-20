import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { movies } from '../../../constants';
import { LuDot } from 'react-icons/lu';
import { FaStar } from 'react-icons/fa';
import MoviesSlider from '../../../components/movies/MoviesSlider';
import { BiArrowToLeft } from 'react-icons/bi';

const MovieDetail = () => {
  const { title } = useParams();
  const [data, setData] = useState({});
  // const id = localStorage.getItem('movieID');

  useEffect(() => {
    const filteredMovie = movies.find((prev) => prev.title === title);

    setData(filteredMovie);
  }, []);
  console.log(data);

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${data.img})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        className="w-screen h-screen flex"
      >
        <div className="w-[55%]  flex flex-col justify-between items-start">
          <Link to={'#'}>
            <div className="text-[1.8rem] text-textSecondary flex items-center gap-2 px-6 py-1 bg-textPrimary rounded-full ml-4 mt-4 hover:bg-textSecondary hover:text-textPrimary transition-all ">
              <BiArrowToLeft />
              <p className="">Back</p>
            </div>
          </Link>

          <div className="p-10 font-montserrat bg-[#313131] backdrop-filter backdrop-blur-[2px] bg-opacity-40 w-full rounded-t-[3rem]">
            <h1 className="text-[4.8rem] uppercase font-bold tracking-[.5rem]">
              {data.title}
            </h1>

            <div className="flex gap-5 items-center text-[3.2rem] ">
              <div className="flex gap-4">
                <FaStar className="" />
                <FaStar className="" />
                <FaStar className="" />
                <FaStar className="" />
                <FaStar className="" />
              </div>
              <p className="font-semibold">{data.rating}</p>
            </div>
          </div>
        </div>

        <div className="w-[45%] h-full bg-[#313131] backdrop-filter backdrop-blur-lg bg-opacity-60 ">
          <div className="w-full py-10 px-6">
            <div className="w-full flex gap-8 ">
              <div className="w-[30%] ">
                <img
                  src={data.img}
                  alt={`${data.title} image`}
                  className="rounded-[3.6rem] w-full"
                />
              </div>

              <div className="w-[70%] space-y-8 text-[1.4rem]">
                <h1 className="heading-1">{data.title}</h1>
                <div className="flex items-center gap-4 small-text">
                  <span className="flex items-center gap-2">
                    <FaStar color="#ffcb00" /> {data.rating}
                  </span>
                  <LuDot />
                  <span className="">{data.duration}</span>
                  <LuDot />
                  <span className="">{data.year}</span>
                </div>

                <p className="small-text">{data.genre}</p>

                <article className="text-justify">{data.detail} </article>

                <div className="grid grid-cols-2 items-start gap-8">
                  <p className="small-text">Directed By</p>
                  <p className="">{data.director}</p>

                  <p className="small-text">Starring</p>
                  <p className="">{data.actors}</p>
                </div>
              </div>
            </div>

            <div className="">
              <h2 className="heading-2 font-montserrat">Trailer and Clips</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieDetail;
