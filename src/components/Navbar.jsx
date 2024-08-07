import { navigation } from '../constants';
import { Link } from 'react-router-dom';
import { logo, profilePic } from '../assets';
import { FiSearch } from 'react-icons/fi';
import { IoNotifications, IoChevronDown } from 'react-icons/io5';
import { Context } from '../Contexts/Context';
import { useContext, useEffect, useState } from 'react';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState('/');
  // const { active, setActive } = useContext(Context);
  // useEffect(() => {}, [active]);

  return (
    <>
      <nav className="fixed z-20 w-screen h-max flex items-center justify-between py-2 px-8 md:px-10 bg-[#0f0f0f]">
        <div className="w-[8rem] h-[8rem]">
          <img
            src={logo}
            alt="Nerdflix logo"
            className="w-full h-full object-cover"
          />
        </div>

        <ul className="md:flex w-[45%] justify-between hidden">
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
              } py-1 px-10 font-bold text-center rounded-full`}
            >
              <Link to={route.link}>
                <p className="">{route.linkName}</p>
              </Link>
            </li>
          ))}
        </ul>

        <form action="#" className="">
          <FiSearch className="absolute top-[3.5rem] w-16" />
          <input
            type="search"
            name=""
            id=""
            className="rounded-full bg-[#313131] text-textPrimary text-center p-2 placeholder:text-textPrimary placeholder:text-center"
            placeholder="Search"
          />
        </form>

        <div className="flex gap-12 items-center">
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
      </nav>
    </>
  );
};

export default Navbar;
