import { FcGoogle } from 'react-icons/fc';
import { bgImg } from '../../assets';
import { Link } from 'react-router-dom';
import { FaFacebook, FaXTwitter, FaApple } from 'react-icons/fa6';

const SignIn = () => {
  return (
    <div className="font-montserrat bg-[#313131] w-screen h-screen flex justify-center items-center">
      <div
        style={{
          backgroundImage: `url(${bgImg})`,
          backgroundSize: 'cover',
        }}
        className="w-full h-full  xl:w-[80vw] xl:min-h-[60vh] xl:max-h-[85vh] rounded-3xl flex"
      >
        <div className="bg-white rounded-3xl md:rounded-r-3xl w-full h-full md:max-h-full md:w-[50%] text-textSecondary px-[3.6rem] md:px-[6.4rem] flex items-center bg-opacity-40 backdrop-filter backdrop-blur-[2px] md:bg-opacity-100 md:backdrop-filter-none">
          <div className="w-full">
            <h1 className="heading-3">Sign In</h1>
            <p className="text-[1.4rem]">
              Please enter your details to sign in.
            </p>
            <form action="" className="my-[1.6rem] grid grid-cols-1 gap-6">
              <div className="">
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
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter password"
                  className=" w-full border border-[#bcbcbc] rounded-[5px] outline-none py-[.6rem] px-[1.2rem] focus:border-2 focus:border-[#010101] text-[1.4rem]"
                  required
                />
                <p className="text-[#334ba2] font-semibold hover:text-[#7987c2] text-[1.4rem] text-right">
                  Forgot password?
                </p>
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="logged-in"
                  id="logged-in"
                  className="border border-[#bcbcbc] rounded-[5px] outline-none "
                />
                <label
                  htmlFor="logged-in"
                  className="text-[1.4rem] text-textSecondary"
                >
                  Keep me logged in
                </label>
              </div>

              <div className="">
                <button
                  type="submit"
                  className="bg-[#334ba2] w-full py-[.6rem] px-[1.6rem] text-center font-semibold text-textPrimary rounded-[5px] shadow-sm hover:bg-[#7987c2] "
                >
                  Sign in
                </button>
              </div>
            </form>

            <div className="w-full py-4 flex gap-4 justify-center items-center text-[1.4rem]">
              <p className="">Don't have an account?</p>
              <Link
                to={'/sign-up'}
                className="text-[#334ba2] font-semibold hover:text-[#7987c2] "
              >
                Create account
              </Link>
            </div>

            <div className="w-full flex items-center gap-2 py-4 text-center">
              <div className="border border-[#bcbcbc] w-full"></div>
              <p className="text-[1.4rem] w-full">or continue with</p>
              <div className="border border-[#bcbcbc] w-full"></div>
            </div>

            <div className="flex justify-between items-center px-10 py-6">
              <FcGoogle size={28} className="" />
              <FaFacebook size={28} className="text-[#334ba2] " />
              <FaXTwitter size={28} className="text-black" />
              <FaApple size={28} className="text-black" />
            </div>
          </div>
        </div>

        <div className="w-[50%] hidden md:flex items-center justify-center ">
          <div className="backdrop-filter backdrop-blur-[2px] bg-opacity-20 bg-white w-[85%] h-[90%] rounded-2xl flex justify-center items-center">
            <p className="heading-1 px-[2.8rem]">
              Welcome <br /> back!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
