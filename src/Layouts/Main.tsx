import Footer from '@/Shared/Footer';
import Navbar from '@/Shared/Navbar';

import { Outlet, useLocation } from 'react-router';

const Main = () => {
  const location = useLocation();
  const hideNavbarFooter = ['/login', '/register'].includes(location.pathname);
  return (
    <div className="mx-auto max-w-[1440px] font-poppins">
      {!hideNavbarFooter && <Navbar />}
      <div className="min-h-[calc(100vh-136px)]">
        <Outlet />
      </div>
      {!hideNavbarFooter && (
        <div className="mt-20">
          <Footer />
        </div>
      )}
    </div>
  );
};

export default Main;
