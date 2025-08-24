import Footer from '@/Shared/Footer';
import Navbar from '@/Shared/Navbar';

import { Outlet } from 'react-router';

const Main = () => {
  return (
    <div className="max-w-[1440px] mx-auto ">
      <Navbar></Navbar>
      <div className="min-h-[calc(100vh-136px)]">
        <Outlet></Outlet>
      </div>
      <div className="mt-20">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Main;
