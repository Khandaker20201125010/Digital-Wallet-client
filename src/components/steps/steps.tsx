import mobile from '../../assets/images/mobileone.png';
import chart from '../../assets/images/chart.png';
import { Check } from 'lucide-react';
import incomingIcon from '../../assets/images/income_icon.svg';
import expenseIcon from '../../assets/images/icon_expenses.svg';
import { Link } from 'react-router';
import CountUp from 'react-countup';

const Steps = () => {
  return (
    <div className="container flex w-full flex-col items-center justify-between px-4 py-16 sm:px-6 sm:py-20 md:flex-row md:px-8 lg:px-12 xl:px-20 dark:text-white">
      {/* Left Section */}
      <div data-aos="fade-up" data-aos-duration="1500" className="space-y-4 md:w-1/2 lg:space-y-6">
        <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl">
          Our Easy Steps For <br />
          <span className="bg-gradient-to-r from-purple-500 to-pink-400 bg-clip-text text-transparent">
            Registration
          </span>
        </h2>
        <p className="text-sm text-gray-700 sm:text-base dark:text-gray-400">
          Getting started is simple and quick. Follow these easy steps to join
          our platform and take control of your finances today.
        </p>

        {/* Steps */}
        <div className="grid grid-cols-1 gap-2 text-xs font-bold sm:grid-cols-2 sm:gap-3 sm:text-sm">
          <p className="flex items-center gap-2">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-pink-500 sm:h-6 sm:w-6">
              <Check
                className="h-3 w-3 text-white sm:h-4 sm:w-4"
                strokeWidth={3}
              />
            </span>
            Sign in with ID Card
          </p>
          <p className="flex items-center gap-2">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-pink-500 sm:h-6 sm:w-6">
              <Check
                className="h-3 w-3 text-white sm:h-4 sm:w-4"
                strokeWidth={3}
              />
            </span>
            User Configuration
          </p>
          <p className="flex items-center gap-2">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-pink-500 sm:h-6 sm:w-6">
              <Check
                className="h-3 w-3 text-white sm:h-4 sm:w-4"
                strokeWidth={3}
              />
            </span>
            Select Country Location
          </p>
          <p className="flex items-center gap-2">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-pink-500 sm:h-6 sm:w-6">
              <Check
                className="h-3 w-3 text-white sm:h-4 sm:w-4"
                strokeWidth={3}
              />
            </span>
            Enter the Transaction
          </p>
          <p className="flex items-center gap-2">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-pink-500 sm:h-6 sm:w-6">
              <Check
                className="h-3 w-3 text-white sm:h-4 sm:w-4"
                strokeWidth={3}
              />
            </span>
            Enjoy Full Access
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap gap-3 pt-3 sm:gap-4 sm:pt-4">
          <button className="group relative z-10 mt-4 inline-block cursor-pointer overflow-hidden rounded-full border-2 border-purple-500 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 px-4 py-2 font-sans text-xs font-bold text-white max-sm:w-full sm:mt-5 sm:px-5 sm:py-2.5 sm:text-sm md:px-6 md:py-3 md:text-base dark:text-white">
            <span className="absolute inset-0 z-[-1] -translate-x-full bg-gradient-to-r from-blue-950 via-purple-950 to-blue-950 transition-transform duration-300 ease-in-out group-hover:translate-x-0"></span>
            <Link to="/register">
              <span className="relative"> Register Now</span>
            </Link>
          </button>
          <button className="group relative z-10 mt-4 inline-block cursor-pointer overflow-hidden rounded-full border-2 border-purple-500 bg-gradient-to-r from-blue-950 via-purple-950 to-blue-950 px-4 py-2 font-sans text-xs font-bold text-white max-sm:w-full sm:mt-5 sm:px-5 sm:py-2.5 sm:text-sm md:px-6 md:py-3 md:text-base dark:text-white">
            <span className="absolute inset-0 z-[-1] translate-x-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-transform duration-300 ease-in-out group-hover:translate-x-0"></span>
            <Link to="/login">
              <span className="relative"> Get Started</span>
            </Link>
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div className="relative mt-8 flex justify-center md:mt-0 md:w-3/5">
        {/* Solid Ball + Glow Lighting */}
        <div   data-aos="zoom-in"
          data-aos-duration="1500" className="absolute top-5 right-[20px] -z-10 sm:top-8 sm:right-[30px] md:top-10 md:right-[25px] lg:right-[50px]">
          {/* Glow / Lighting */}
          <div className="absolute top-8 right-8 h-[180px] w-[180px] rounded-full bg-purple-500 opacity-50 blur-[80px] sm:top-10 sm:right-10 sm:h-[250px] sm:w-[250px] sm:blur-[100px] md:h-[280px] md:w-[280px] md:blur-[120px] lg:h-[450px] lg:w-[450px] lg:blur-[180px]" />

          {/* Solid Ball */}
          <div className="relative h-[160px] w-[160px] rounded-full bg-gradient-to-bl from-purple-500 via-pink-600 to-indigo-700 sm:h-[180px] sm:w-[180px] md:h-[200px] md:w-[200px] lg:h-[350px] lg:w-[350px]" />
        </div>

        {/* Phone Mockup */}
        <img
          data-aos="fade-up"
          data-aos-duration="1500"
          src={mobile}
          alt="mobile app"
          className="relative z-10 w-[140px] sm:w-[180px] md:w-[200px] lg:w-[260px] xl:w-[300px]"
        />

        {/* Floating Elements - Adjusted for 768px devices */}
        <div className="mt-4 flex flex-col items-center space-y-3 sm:absolute sm:top-0 sm:right-[-15px] sm:space-y-4 md:right-[-20px] md:space-y-4 lg:right-[-40px] lg:space-y-5">
          {/* Incomes Card */}
          <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            className="w-[80px] rounded-xl bg-[#1c1630] px-2 py-1.5 text-white shadow-lg sm:w-[100px] sm:px-2.5 sm:py-2 md:w-[110px] lg:w-[150px] lg:px-3 lg:py-2"
          >
            <div
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
              className="flex h-5 w-5 items-center justify-center rounded-md bg-white p-1 sm:h-5 sm:w-5 md:h-6 md:w-6"
            >
              <img
                src={incomingIcon}
                alt="incomes"
                className="h-3 w-3 object-contain sm:h-3 sm:w-3 md:h-4 md:w-4"
              />
            </div>
            <p className="mt-1 text-[8px] text-gray-300 sm:mt-1.5 sm:text-[9px] md:mt-2 md:text-[10px] lg:text-xs">
              Incomes
            </p>
            <p className="text-xs font-semibold sm:text-xs md:text-sm lg:text-base xl:text-lg">
              $<CountUp end={2750.5} duration={2} decimals={1} separator="," />
            </p>
          </div>

          {/* Chart Image */}
          <img
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            src={chart}
            alt="chart"
            className="w-[90px] rounded-xl shadow-lg sm:w-[110px] md:w-[120px] lg:w-[150px] xl:w-[170px]"
          />

          {/* Expenses Card */}
          <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            className="w-[80px] rounded-xl bg-[#1c1630] px-2 py-1.5 text-white shadow-lg sm:w-[100px] sm:px-2.5 sm:py-2 md:w-[110px] lg:w-[150px] lg:px-3 lg:py-2"
          >
            <div className="flex h-5 w-5 items-center justify-center rounded-md bg-white p-1 sm:h-5 sm:w-5 md:h-6 md:w-6">
              <img
                src={expenseIcon}
                alt="expenses"
                className="mb-0.5 w-3 object-contain sm:mb-0.5 sm:w-3 md:mb-1 md:w-4"
              />
            </div>
            <p className="mt-1 text-[8px] text-gray-300 sm:mt-1.5 sm:text-[9px] md:mt-2 md:text-[10px] lg:text-xs">
              Expenses
            </p>
            <p className="text-xs font-semibold sm:text-xs md:text-sm lg:text-base xl:text-lg">
              $<CountUp end={1240.8} duration={2} decimals={1} separator=","/>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;
