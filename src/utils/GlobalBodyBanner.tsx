import CountUp from 'react-countup';
import globalBannerImg from '../assets/images/globalbannerimg.png';
import 'animate.css';
import { Link } from 'react-router';

const GlobalBodyBanner = () => {
  return (
    <section className="relative my-20 w-full bg-white text-gray-900 dark:bg-[#0B0C10] dark:text-white">
      <div className="h-[1px] flex-grow bg-gradient-to-r from-purple-600 via-indigo-500 to-blue-600 dark:from-purple-800 dark:via-gray-700 dark:to-purple-800" />

      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-10 px-6 md:flex-row md:px-12">
        {/* LEFT CONTENT */}
        <div
          data-aos="fade-up"
          data-aos-duration="1500"
          className="order-1 text-center md:order-1 md:w-1/3 md:text-left"
        >
          <h1 className="text-2xl leading-tight font-bold md:text-5xl">
            Global Online <br />
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent dark:from-purple-400 dark:to-pink-400">
              Money Transfer
            </span>{' '}
            <br />
            Services
          </h1>

          <p className="mx-auto mt-6 max-w-md text-sm leading-relaxed text-gray-600 md:mx-0 md:text-base dark:text-gray-400">
            Send and receive money worldwide with ease. Our platform offers
          </p>
          <button className="group relative z-10 mt-6 inline-block cursor-pointer overflow-hidden rounded-full border-2 border-purple-500 bg-gradient-to-r from-blue-950 via-purple-950 to-blue-950 px-6 py-3 font-sans text-base font-bold text-white max-sm:w-full dark:text-white">
            {/* Background sliding effect */}
            <span className="absolute inset-0 z-[-1] translate-x-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-transform duration-300 ease-in-out group-hover:translate-x-0"></span>

            {/* Button text */}
            <Link to="/contact">
              <span className="relative"> Contact Us</span>
            </Link>
          </button>
        </div>

        {/* STATS (middle on mobile, right on desktop) */}
        <div
          //   data-aos="fade-down"
          //   data-aos-duration="1500"
          className="order-2 flex w-full flex-row items-center justify-center gap-4 text-center max-sm:gap-2 md:order-3 md:w-1/3 md:flex-col md:gap-6"
        >
          <div className="flex w-36 flex-1 flex-col justify-center rounded-xl border-2 border-purple-500 p-3">
            <h2 className="text-2xl font-bold text-gray-900 md:text-3xl dark:text-white">
              <CountUp end={93} duration={4} separator="," />+
            </h2>
            <p className="text-gray-600 dark:text-gray-400">Satisfied user</p>
          </div>

          <div className="flex flex-1 flex-col justify-center rounded-xl border-2 border-purple-500 p-3">
            <h2 className="text-2xl font-bold text-gray-900 md:text-3xl dark:text-white">
              <CountUp start={1} end={4.9} duration={5} decimals={1} />
              /5
            </h2>
            <p className="text-gray-600 dark:text-gray-400">Client Rating</p>
          </div>

          <div className="flex w-36 flex-1 flex-col justify-center rounded-xl border-2 border-purple-500 p-3">
            <h2 className="text-2xl font-bold text-gray-900 md:text-3xl dark:text-white">
              <CountUp end={99} duration={4} separator="," />%
            </h2>
            <p className="text-gray-600 dark:text-gray-400">Secure Payments</p>
          </div>
        </div>

        {/* MIDDLE IMAGE (bottom on mobile, middle on desktop) */}
        <div
          data-aos="zoom-in"
          data-aos-duration="1500"
          className="relative order-3 flex justify-center md:order-2 md:w-1/3"
        >
          {/* Glow Effect */}
          <div className="absolute h-[450px] w-[600px] rounded-full bg-purple-500 opacity-50 blur-[180px] dark:bg-purple-700"></div>

          {/* Top Card */}
          <img
            className="relative z-10 h-[300px] w-full md:h-[600px]"
            src={globalBannerImg}
            alt=""
          />
        </div>
      </div>
      <div className="h-[1px] flex-grow bg-gradient-to-r from-purple-600 via-indigo-500 to-blue-600 dark:from-purple-800 dark:via-gray-700 dark:to-purple-800" />
    </section>
  );
};

export default GlobalBodyBanner;
