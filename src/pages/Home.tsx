import Banner from '@/components/Banner/Banner';
import FeaturesOverview from '@/components/FeaturesOverview/FeaturesOverview';
import SendMoneyPayment from '@/components/SendMoneyPayment/SendMoneyPayment';
import Steps from '@/components/steps/steps';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <FeaturesOverview></FeaturesOverview>
      <Steps></Steps>
      <SendMoneyPayment></SendMoneyPayment>
    </div>
  );
};

export default Home;
