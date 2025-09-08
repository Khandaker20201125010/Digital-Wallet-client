
import CountUp from 'react-countup';
import { Link } from 'react-router';

const PricePlaningCard = () => {
  return (
    <div className="mx-auto flex w-full flex-col items-start gap-8 px-4 py-12 text-black md:flex-row md:justify-center md:gap-12 dark:text-white">
      {/* Personal Plan */}
      <div data-aos="flip-left" data-aos-duration="1500" className="flex hover:border-pink-500 w-full flex-col gap-6 rounded-2xl border border-purple-500 bg-transparent p-8 text-start shadow-lg md:w-[45%]">
        <h1 className="text-3xl font-bold">Personal</h1>
        <p className="text-gray-600 dark:text-gray-300">
          Perfect for individuals to manage daily expenses. Send, receive, and
          store money securely anytime, anywhere.
        </p>

        <div className="my-4 flex gap-2">
          <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-5xl font-bold text-transparent">
            $ <CountUp end={15} duration={10} separator="," />
          </span>
          <p className="mt-2 text-gray-500 dark:text-gray-400">
            Per user/per month billed annually
          </p>
        </div>

        <button className="md:w-1/2 group relative z-10 mt-6 inline-block cursor-pointer overflow-hidden rounded-full border-2 border-purple-500 bg-gradient-to-r from-blue-950 via-purple-950 to-blue-950 px-6 py-3 font-sans text-base font-bold text-white max-sm:w-full dark:text-white">
            {/* Background sliding effect */}
            <span className="absolute inset-0 z-[-1] translate-x-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-transform duration-300 ease-in-out group-hover:translate-x-0"></span>

            {/* Button text */}
           <Link to="/about">
            <span className="relative"> Get Started</span>
            </Link>
          </button>
      </div>

      {/* Basic Plan */}
      <div data-aos="flip-left" data-aos-duration="1500" className="flex hover:border-pink-500 w-full flex-col gap-6 rounded-2xl border border-purple-500 bg-transparent p-8 text-start shadow-lg md:w-[45%]">
        <h1 className="text-3xl font-bold">Basic</h1>
        <p className="text-gray-600 dark:text-gray-300">
          Ideal for merchants and small businesses. Accept customer payments,
          track transactions, and grow faster.
        </p>

        <div className="my-4 flex gap-2">
          <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-5xl font-bold text-transparent">
             $ <CountUp end={10} duration={10} separator="," />
          </span>
          <p className="mt-2 text-gray-500 dark:text-gray-400">
            Per user/per month billed annually
          </p>
        </div>

          <button className="md:w-1/2 group relative z-10 mt-6 inline-block cursor-pointer overflow-hidden rounded-full border-2 border-purple-500 bg-gradient-to-r from-blue-950 via-purple-950 to-blue-950 px-6 py-3 font-sans text-base font-bold text-white max-sm:w-full dark:text-white">
            {/* Background sliding effect */}
            <span className="absolute inset-0 z-[-1] translate-x-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-transform duration-300 ease-in-out group-hover:translate-x-0"></span>

            {/* Button text */}
           <Link to="/about">
            <span className="relative"> Get Started</span>
            </Link>
          </button>
      </div>
    </div>
  );
};

export default PricePlaningCard;
