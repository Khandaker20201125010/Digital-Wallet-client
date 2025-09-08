import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router";
import Navbar from "@/Shared/Navbar";
import Footer from "@/Shared/Footer";
import Loader from "@/utils/Loader";

const Main = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Show loader for 600ms every time route changes
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  const hideNavbarFooter = ["/login", "/register","/unauthorized"].includes(location.pathname);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <Loader />
      </div>
    );
  }

  return (
    <div className="font-poppins mx-auto max-w-[1440px]">
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
