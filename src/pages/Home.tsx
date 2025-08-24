import Banner from '@/components/Banner/Banner';
import FeaturesOverview from '@/components/FeaturesOverview/FeaturesOverview';
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
    </div>
  );
};

export default Home;
