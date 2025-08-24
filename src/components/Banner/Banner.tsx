import CountUp from 'react-countup';
import digitalCardOne from '../../assets/images/digital-card-one.png';
import digitalCardtwo from '../../assets/images/digital-card-two.png';
import 'animate.css';
import BannerFooter from './BannerFooter';
import { Link } from 'react-router';

const Banner = () => {
  return (
    <section className="relative w-full bg-white text-gray-900 dark:bg-[#0B0C10] dark:text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between px-6 py-20 md:flex-row md:px-12">
        {/* LEFT CONTENT */}
        <div data-aos="fade-up" data-aos-duration="1500" className=" text-center md:w-1/2 md:text-left">
          <h1 className="text-4xl leading-tight font-bold md:text-6xl">
            The Ultimate <br />
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent dark:from-purple-400 dark:to-pink-400">
              Online Payment
            </span>{' '}
            <br />
            Solution
          </h1>

          <p className="mx-auto mt-6 max-w-md text-sm leading-relaxed text-gray-600 md:mx-0 md:text-base dark:text-gray-400">
            WaveFounds is a cutting-edge digital wallet designed to simplify
            your online transactions. With top-notch security and user-friendly
            features, managing your finances has never been easier.
          </p>
          <button className="group relative z-10 mt-6 inline-block cursor-pointer overflow-hidden rounded-full border-2 border-purple-500 bg-gradient-to-r from-blue-950 via-purple-950 to-blue-950 px-6 py-3 font-sans text-base font-bold text-white max-sm:w-full dark:text-white">
            {/* Background sliding effect */}
            <span className="absolute inset-0 z-[-1] translate-x-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-transform duration-300 ease-in-out group-hover:translate-x-0"></span>

            {/* Button text */}
           <Link to="/about">
            <span className="relative"> Get Started</span>
            </Link>
          </button>

          {/* Reviews */}
          <div className="mt-8 flex flex-col-reverse justify-center gap-3 max-sm:hidden md:justify-start">
            <div className="flex -space-x-3">
              <img
                src="https://randomuser.me/api/portraits/women/1.jpg"
                className="h-10 w-10 rounded-full border-2 border-purple-500 dark:border-[#0B0C10]"
              />
              <img
                src="https://randomuser.me/api/portraits/men/2.jpg"
                className="h-10 w-10 rounded-full border-2 border-purple-500 dark:border-[#0B0C10]"
              />
              <img
                src="https://randomuser.me/api/portraits/women/3.jpg"
                className="h-10 w-10 rounded-full border-2 border-purple-500 dark:border-[#0B0C10]"
              />
              <h1 className="h-10 w-10 rounded-full border border-black bg-white p-2 text-sm font-semibold dark:border-[#0B0C10]">
                <CountUp end={5} duration={7} suffix="k+" />
              </h1>
            </div>
            <span className="text-sm text-gray-700 dark:text-gray-300">
              Over{' '}
              <span className="font-bold text-gray-900 dark:text-white">
                {' '}
                <CountUp end={5000} duration={2} separator="," />+
              </span>{' '}
              Reviews
            </span>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div data-aos="zoom-in" data-aos-duration="1500" className=" relative mt-12 flex justify-center max-sm:py-5 md:mt-0 md:w-1/2">
          {/* Glow Effect */}
          <div className="absolute h-[450px] w-[600px] rounded-full bg-purple-500 opacity-50 blur-[180px] dark:bg-purple-700"></div>

          {/* Top Card */}
          <img
            src={digitalCardOne}
            alt="Digital Card One"
            className="relative -bottom-10 -left-5 w-72 rotate-[30deg] drop-shadow-2xl md:w-[500px]"
          />

          {/* Bottom Card */}
          <img
            src={digitalCardtwo}
            alt="Digital Card Two"
            className="absolute bottom-10 -left-10 w-72 -rotate-[30deg] drop-shadow-2xl md:w-[500px]"
          />
        </div>

        {/* Stats Section */}
        <div data-aos="fade-down"data-aos-duration="1500" className="mx-auto flex max-w-4xl flex-col items-center justify-between gap-10 px-6 py-12 text-center max-sm:flex-row max-sm:gap-5">
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-gray-900 max-sm:text-xl dark:text-white">
              {' '}
              <CountUp end={93} duration={2} separator="," />+
            </h2>
            <p className="text-gray-600 max-sm:text-sm dark:text-gray-400">
              Satisfied user
            </p>
          </div>
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-gray-900 max-sm:text-xl dark:text-white">
              {' '}
              <CountUp end={4.9} duration={2} decimals={1} />
              /5
            </h2>
            <p className="text-gray-600 max-sm:text-sm dark:text-gray-400">
              Client Rating
            </p>
          </div>
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-gray-900 max-sm:text-xl dark:text-white">
              {' '}
              <CountUp end={99} duration={2} separator="," />
            </h2>
            <p className="text-gray-600 max-sm:text-sm dark:text-gray-400">
              Secure Payments
            </p>
          </div>
        </div>
      </div>
      <BannerFooter />
    </section>
  );
};

export default Banner;
