import { navigation } from '../constants';
import { Link } from 'react-router-dom';
import { logo, profilePic } from '../assets';
import { FiSearch } from 'react-icons/fi';
import { IoNotifications, IoChevronDown } from 'react-icons/io5';
import { Context } from '../Contexts/Context';
import { useContext, useEffect, useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { AiOutlineClose } from 'react-icons/ai';
import { CgToggleOff } from 'react-icons/cg';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState('/');
  // const { active, setActive } = useContext(Context);
  // useEffect(() => {}, [active]);

  return (
    <>
      <header className="">
        <nav className="fixed z-[2000] w-screen h-max flex items-center justify-between py-1 px-8 md:px-10 bg-[#0f0f0f] ">
          <div className="w-[8rem] sm:w-[8rem] h-[6rem] sm:h-[8rem]">
            <img
              src={logo}
              alt="Nerdflix logo"
              className="w-full h-full object-cover"
            />
          </div>

          <ul className="lg:flex w-[45%] justify-between hidden">
            {navigation.map((route) => (
              <li
                key={route.id}
                onClick={() => {
                  setActive(route.link);
                }}
                className={`${
                  active === route.link
                    ? 'text-textSecondary bg-textPrimary shadow-lg'
                    : 'text-textPrimary'
                } py-1 md:px-5 xl:px-10 font-bold text-center rounded-full 
                `}
              >
                <Link to={route.link}>
                  <p className="">{route.linkName}</p>
                </Link>
              </li>
            ))}
          </ul>

          <form action="#" className="w-[20rem]">
            <FiSearch className="absolute top-[3.5rem] w-16" />
            <input
              type="search"
              name=""
              id=""
              className="rounded-full bg-[#313131] text-textPrimary text-center p-2 placeholder:text-textPrimary placeholder:text-center w-full"
              placeholder="Search"
            />
          </form>

          <div className=" gap-12 items-center hidden lg:flex">
            <IoNotifications className="" />

            <div className="flex items-center">
              <img
                src={profilePic}
                alt="Nerdflix logo"
                className="w-[4rem] h-[4rem] object-cover rounded-full"
              />
              <IoChevronDown className="" />
            </div>
          </div>

          <div className="block lg:hidden text-[3rem]">
            {toggle ? (
              <AiOutlineClose onClick={() => setToggle(!toggle)} className="" />
            ) : (
              <RxHamburgerMenu
                onClick={() => setToggle(!toggle)}
                className=""
              />
            )}
          </div>
        </nav>

        <div
          className={`${
            !toggle ? 'hidden' : 'flex'
          } fixed flex-col items-center justify-center gap-[3.2rem] text-[3.6rem] font-bold h-screen w-full bg-[#131313] bg-opacity-90 backdrop-filter backdrop-blur-sm z-[500] `}
        >
          <div className="flex items-center justify-self-start">
            <img
              src={profilePic}
              alt="Nerdflix logo"
              className="w-[8rem] h-[8rem] object-cover rounded-full"
            />
            <IoChevronDown className="" />
          </div>

          {navigation.map((route) => (
            <div
              key={route.id}
              onClick={() => {
                setActive(route.linkName);
                setToggle(!toggle);
              }}
              className=""
            >
              <Link
                to={route.link}
                onClick={() => setActive(route.linkName)}
                className={`${
                  active === route.linkName
                    ? 'text-red-500'
                    : 'text-textPrimary'
                }`}
              >
                {route.linkName}
              </Link>
            </div>
          ))}
        </div>
      </header>
    </>
  );
};

export default Navbar;
