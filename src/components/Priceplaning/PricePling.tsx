import digitalCardOne from '../../assets/images/digital-card-one.png';
import digitalCardtwo from '../../assets/images/digital-card-two.png';
import PricePlaningCard from './PricePlaningCard';

const PricePling = () => {
  return (
    <div>
      <div className="h-[1px] flex-grow bg-gradient-to-r from-pink-400 via-indigo-500 to-purple-600 dark:from-purple-800 dark:via-gray-700 dark:to-purple-800" />
      <div className="container mx-auto flex w-full flex-col items-center justify-between gap-12 px-6 py-16 text-black lg:flex-row dark:text-white">
        <div className="h-[1px] flex-grow bg-gradient-to-r from-purple-600 via-indigo-500 to-blue-600 dark:from-purple-800 dark:via-gray-700 dark:to-purple-800" />
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between md:flex-row md:px-12">
          <div
            data-aos="zoom-in"
            data-aos-duration="1500"
            className="relative mt-12 flex justify-center max-sm:py-5 md:mt-0 md:w-1/2"
          >
            {/* Glow Effect */}
            <div className="absolute h-[450px] w-[600px] rounded-full bg-purple-500 opacity-50 blur-[180px] dark:bg-purple-700"></div>

            {/* Top Card */}
            <img
              src={digitalCardtwo}
              alt="Digital Card One"
              className="relative -left-10 w-72 -rotate-[30deg] drop-shadow-2xl md:w-[900px]"
            />

            {/* Bottom Card */}
            <img
              src={digitalCardOne}
              alt="Digital Card Two"
              className="absolute -bottom-10 left-10 w-72 rotate-[20deg] drop-shadow-2xl md:w-[900px]"
            />
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="1500"
            className="mt-6 text-center md:w-1/2 md:text-left"
          >
            <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl">
              Our Pricing Plan
            </h1>
            <p className="mt-4 text-gray-600 dark:text-gray-300">
              Choose the plan that suits you best. Simple and transparent
              pricing with no hidden fees. <br />
              Upgrade or downgrade anytime as your needs change.
            </p>
          </div>
        </div>
      </div>
      <div>
        <PricePlaningCard></PricePlaningCard>
      </div>

      <div className="h-[1px] flex-grow bg-gradient-to-r from-pink-400 via-indigo-500 to-purple-600 dark:from-purple-800 dark:via-gray-700 dark:to-purple-800" />
    </div>
  );
};

export default PricePling;
