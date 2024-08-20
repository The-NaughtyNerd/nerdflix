import { FcGoogle } from 'react-icons/fc';
import { bgImg } from '../../assets';
import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <div className="font-montserrat bg-[#313131] w-screen h-screen flex justify-center items-center">
      <div
        style={{
          backgroundImage: `url(${bgImg})`,
          backgroundSize: 'cover',
        }}
        className="w-full h-full  xl:w-[80vw] xl:min-h-[60vh] xl:max-h-[85vh] rounded-3xl flex"
      >
        <div className="w-[50%] md:flex items-center justify-center hidden">
          <div className="backdrop-filter backdrop-blur-[2px] bg-opacity-20 bg-white w-[85%] h-[90%] rounded-2xl flex justify-center items-center">
            <p className="heading-1 px-[2.8rem]">
              Become part of the ultimate film experience!
            </p>
          </div>
        </div>

        <div className="bg-white rounded-3xl md:rounded-r-3xl w-full h-full md:max-h-full md:w-[50%] text-textSecondary px-[4.8rem] md:px-[6.4rem] flex items-center bg-opacity-40 backdrop-filter backdrop-blur-[2px] md:bg-opacity-100 md:backdrop-filter-none">
          <div className="w-full ">
            <h1 className="heading-3">Create Account</h1>
            <form action="" className="my-[1.6rem] grid grid-cols-1 gap-8">
              <div className="">
                <label htmlFor="username" className="font-semibold pl-2">
                  Username
                </label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  placeholder="Enter your preferred usename"
                  className=" w-full border border-[#bcbcbc] rounded-[5px] outline-none py-[.6rem] px-[1.2rem] focus:border-2 focus:border-[#010101] text-[1.4rem]"
                  required
                />
              </div>

              <div className="">
                <label htmlFor="email" className="font-semibold pl-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email: example@mail.com"
                  className=" w-full border border-[#bcbcbc] rounded-[5px] outline-none py-[.6rem] px-[1.2rem] focus:border-2 focus:border-[#010101] text-[1.4rem]"
                  required
                />
              </div>

              <div className="">
                <label htmlFor="password" className="font-semibold pl-2">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter password"
                  className=" w-full border border-[#bcbcbc] rounded-[5px] outline-none py-[.6rem] px-[1.2rem] focus:border-2 focus:border-[#010101] text-[1.4rem]"
                  required
                />
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="agreement"
                  id="agreement"
                  className="border border-[#bcbcbc] rounded-[5px] outline-none "
                />
                <label htmlFor="agreement" className="text-[1.4rem]">
                  I agree with the Terms and Privacy Policy
                </label>
              </div>

              <div className="">
                <button
                  type="submit"
                  className="bg-[#334ba2] w-full py-[.6rem] px-[1.6rem] text-center font-semibold text-textPrimary rounded-[5px] shadow-sm hover:bg-[#7987c2] "
                >
                  Create Account
                </button>
              </div>
            </form>

            <div className="w-full flex items-center gap-2 py-4">
              <div className="border border-[#bcbcbc] w-full"></div>
              <p className="text-[1.4rem] text-[#bcbcbc] ">or</p>
              <div className="border border-[#bcbcbc] w-full"></div>
            </div>

            <div className="py-4">
              <button className="w-full text-center border-2 border-[#bcbcbc] py-[.6rem] px-[1.6rem] rounded-[5px] shadow-sm flex items-center justify-center gap-6 hover:bg-[#7987c2]">
                <FcGoogle size={28} />
                <p className="">Sign up with Google</p>
              </button>
            </div>

            <div className="text-[1.4rem] flex  py-4 items-center justify-center w-full gap-4">
              <p className="text-[#bcbcbc]">Already have an account? </p>
              <Link
                to={'/sign-in'}
                className="text-[#334ba2] underline hover:text-[#7987c2] font-semibold"
              >
                Log in
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
