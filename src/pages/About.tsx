import { Button } from '@/components/ui/button';
import { Link } from 'react-router';
import logo from '../assets/images/logo.png';
import GlobalBodyBanner from '@/utils/GlobalBodyBanner';
import SendMoneyPayment from '@/components/SendMoneyPayment/SendMoneyPayment';
import AboutPageTeamSection from '@/components/AboutPageTeamSection';
import Testimonials from '@/components/Testimonials/Testimonials';
const About = () => {
  return (
    <div>
      <div
        data-aos="flip-right"
        data-aos-duration="1500"
        className="aboutBG relative h-[400px] w-full overflow-hidden"
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative z-10 flex h-full w-full flex-col items-center justify-center px-4 text-center">
          <h1 className="bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-5xl font-extrabold text-transparent uppercase">
            About Us
          </h1>
          <p className="mt-5 text-xl font-bold text-white uppercase md:text-2xl">
            WaveFounds is a cutting-edge
            <br />
            digital wallet designed to simplify
          </p>
        </div>
      </div>
      <div className="relative w-full py-20 text-black dark:text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-12 px-6 md:flex-row">
          {/* LEFT CONTENT */}
          <div
            data-aos="fade-up"
            data-aos-duration="1500"
            className="relative text-center md:w-1/2 md:text-left"
          >
            {/* Glow Background */}
            <div className="absolute top-1/2 left-1/2 z-0 h-[450px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500 opacity-50 blur-[180px] dark:bg-purple-700"></div>

            {/* Text Content */}
            <div className="relative z-10">
              <p className="text-sm font-medium text-purple-400">Our Mission</p>

              <h1 className="mt-2 bg-clip-text text-3xl leading-tight font-bold text-black md:text-5xl dark:text-white">
                Empowering <br /> Financial Freedom
              </h1>

              <p className="mt-6 max-w-md text-gray-600 md:text-base dark:text-gray-300">
                At WaveFounds, we believe that everyone deserves the tools and
                knowledge to take control of their financial future. Our mission
                is to provide innovative solutions that simplify personal
                finance management, making it accessible and engaging for all.
              </p>

              <Link to="/contact">
                <Button
                  variant="gradient"
                  className="mt-6 rounded-full border border-purple-500 px-6 py-3 text-white hover:bg-purple-600"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>

          {/* RIGHT ORBIT DESIGN */}
          <div
            data-aos="fade-down"
            data-aos-duration="1500"
            className="relative flex aspect-square w-full max-w-md items-center justify-center md:max-w-lg lg:max-w-xl"
          >
            {/* Central Logo */}
            <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-r from-pink-500 via-purple-900 to-purple-500 shadow-lg sm:h-28 sm:w-28 lg:h-32 lg:w-32">
              <img
                className="h-10 w-10 sm:h-14 sm:w-14 lg:h-16 lg:w-16"
                src={logo}
                alt="Logo"
              />
            </div>

            {/* Orbits */}
            <div className="absolute inset-0 m-auto h-[90%] w-[90%] rounded-full border border-purple-600 opacity-50"></div>
            <div className="absolute inset-0 m-auto h-[70%] w-[70%] rounded-full border border-purple-600 opacity-50"></div>
            <div className="absolute inset-0 m-auto h-[50%] w-[50%] rounded-full border border-purple-600 opacity-50"></div>

            {/* Avatars/icons */}
            <img
              src="https://randomuser.me/api/portraits/women/1.jpg"
              alt="Avatar 1"
              className="absolute top-[10%] left-1/2 h-10 w-10 -translate-x-1/2 rounded-full border-2 border-purple-500 sm:h-12 sm:w-12"
            />
            <img
              src="https://randomuser.me/api/portraits/men/2.jpg"
              alt="Avatar 2"
              className="absolute top-1/2 right-[10%] h-10 w-10 -translate-y-1/2 rounded-full border-2 border-purple-500 sm:h-12 sm:w-12"
            />
            <img
              src="https://randomuser.me/api/portraits/women/3.jpg"
              alt="Avatar 3"
              className="absolute bottom-[10%] left-1/2 h-10 w-10 -translate-x-1/2 rounded-full border-2 border-purple-500 sm:h-12 sm:w-12"
            />
            <img
              src="https://randomuser.me/api/portraits/men/4.jpg"
              alt="Avatar 4"
              className="absolute top-1/2 left-[10%] h-10 w-10 -translate-y-1/2 rounded-full border-2 border-purple-500 sm:h-12 sm:w-12"
            />
          </div>
        </div>
      </div>
      <GlobalBodyBanner />
      <SendMoneyPayment />
      <AboutPageTeamSection />
      <Testimonials />
    </div>
  );
};

export default About;
