import { Link } from 'react-router';
import error from '../assets/images/error.png';
const Error = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-gray-100 p-4 text-center dark:bg-gray-900">
      <div data-aos="zoom-in" data-aos-duration="1500" className="relative">
        <div className="absolute h-[450px] w-[600px] rounded-full bg-purple-500 opacity-50 blur-[180px] dark:bg-purple-700"></div>
        <img className="relative z-10" src={error} alt="" />
      </div>
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
        Oops Page{' '}
        <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
          not found
        </span>{' '}
        !
      </h1>
      <p>
        The page you are looking for might have been removed had its name
        changed or is temporarily unavailable.
      </p>
      <button className="group relative z-10 mt-6 inline-block cursor-pointer overflow-hidden rounded-full border-2 border-purple-500 bg-gradient-to-r from-blue-950 via-purple-950 to-blue-950 px-6 py-3 font-sans text-base font-bold text-white max-sm:w-full dark:text-white">
        {/* Background sliding effect */}
        <span className="absolute inset-0 z-[-1] translate-x-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-transform duration-300 ease-in-out group-hover:translate-x-0"></span>

        {/* Button text */}
        <Link to="/">
          <span className="relative"> Back To Home</span>
        </Link>
      </button>
    </div>
  );
};

export default Error;
