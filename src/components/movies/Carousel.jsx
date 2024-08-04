import { mainMovie } from '../../assets';
import { LuDot } from 'react-icons/lu';
import { GoTriangleDown } from 'react-icons/go';

const Carousel = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${mainMovie})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      className="w-full h-[55vh] rounded-[4rem] carousel flex justify-between items-end p-16"
    >
      <div className="">
        <h1 className="text-[2.8rem]  font-bold uppercase tracking-[0.5rem]">
          Dune
        </h1>
        <div className="flex gap-2 items-center">
          <h5>Year</h5>
          <LuDot />
          <h5>Genre</h5>
          <LuDot />
          <h5>Watchtime</h5>
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
  );
};

export default Carousel;
