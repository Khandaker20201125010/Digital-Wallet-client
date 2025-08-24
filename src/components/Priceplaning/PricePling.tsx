import digitalCardOne from '../../assets/images/digital-card-one.png';
import digitalCardtwo from '../../assets/images/digital-card-two.png';
import PricePlaningCard from './PriceplaningCard';
const PricePling = () => {
  return (
    <div className="container mx-auto flex w-full flex-col items-center justify-between gap-12 border-b px-6 py-16 text-black lg:flex-row dark:text-white">
      <div>
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
            className="relative -bottom-10 -left-5 w-72 rotate-[30deg] drop-shadow-2xl md:w-[500px]"
          />

          {/* Bottom Card */}
          <img
            src={digitalCardOne}
            alt="Digital Card Two"
            className="absolute bottom-10 -left-10 w-72 -rotate-[30deg] drop-shadow-2xl md:w-[500px]"
          />
        </div>
      </div>
      <div>
        <PricePlaningCard></PricePlaningCard>
      </div>
    </div>
  );
};

export default PricePling;
