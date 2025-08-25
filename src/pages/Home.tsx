import Banner from '@/components/Banner/Banner';
import FeaturesOverview from '@/components/FeaturesOverview/FeaturesOverview';
import NewsAndEvents from '@/components/NewsAndEvents/NewsAndEvents';
import PricePling from '@/components/Priceplaning/PricePling';

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
      <NewsAndEvents></NewsAndEvents>

    </div>
  );
};

export default Home;
