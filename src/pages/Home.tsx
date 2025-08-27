import Banner from '@/components/Banner/Banner';
import FeaturesOverview from '@/components/FeaturesOverview/FeaturesOverview';
import NewsAndEvents from '@/components/NewsAndEvents/NewsAndEvents';
import PricePling from '@/components/Priceplaning/PricePling';

import SendMoneyPayment from '@/components/SendMoneyPayment/SendMoneyPayment';
import Steps from '@/components/steps/steps';
import Testimonials from '@/components/Testimonials/Testimonials';
import RoleModal from '@/components/ui/RoleModal';
import { useEffect, useState } from 'react';

const Home = () => {
  const [openRoleModal, setOpenRoleModal] = useState(false);
  const query = new URLSearchParams(location.search);

  const isNewUser = query.get('newUser') === 'true';
  const email = query.get('email');
  useEffect(() => {
    if (isNewUser) {
      setOpenRoleModal(true);
    }
  }, [isNewUser]);

  const handleRoleSelect = async (role: 'USER' | 'AGENT') => {
    console.log('Role selected:', role, 'for', email);


    setOpenRoleModal(false);
  };
  return (
    <div>
      <Banner></Banner>
      <FeaturesOverview></FeaturesOverview>
      <Steps></Steps>
      <SendMoneyPayment></SendMoneyPayment>
      <Testimonials></Testimonials>
      <PricePling></PricePling>
      <NewsAndEvents></NewsAndEvents>
      <RoleModal
        open={openRoleModal}
        onClose={() => setOpenRoleModal(false)}
        onSelect={handleRoleSelect}
      />
    </div>
  );
};

export default Home;
