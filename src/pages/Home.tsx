import Banner from '@/components/Banner/Banner';
import FeaturesOverview from '@/components/FeaturesOverview/FeaturesOverview';
import PricePling from '@/components/Priceplaning/Pricepling';
import SendMoneyPayment from '@/components/SendMoneyPayment/SendMoneyPayment';
import Steps from '@/components/steps/steps';
import Testimonials from '@/components/Testimonials/Testimonials';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <FeaturesOverview></FeaturesOverview>
      <Steps></Steps>
      <SendMoneyPayment></SendMoneyPayment>
      <Testimonials></Testimonials>
      <PricePling></PricePling>
    </div>
  );
};

export default Home;
