import Main from '@/Layouts/Main';
import About from '@/pages/About';
import Contact from '@/pages/Contact';
import FAQ from '@/pages/FAQ';
import Features from '@/pages/Features';

import Home from '@/pages/Home';
import Login from '@/pages/Login';
import Register from '@/pages/Register';
import RoleSelectionPage from '@/pages/RoleSelectionPage';
import Verify from '@/pages/Verify';
import Error from '@/utils/Error';

import ScrollToTop from '@/utils/ScrollToTop';
import { createBrowserRouter } from 'react-router';

export const router = createBrowserRouter([
  {
    Component: () => (
      <>
        <ScrollToTop />
        <Main />
      </>
    ),
    path: '/',
    errorElement: <Error />,

    children: [
      {
        path: '/',
        Component: Home,
      },
      {
        path: '/about',
        Component: About,
      },
      {
        path: '/features',
        Component: Features,
      },
      {
        path: '/contact',
        Component: Contact,
      },
      {
        path: '/faq',
        Component: FAQ,
      },
      {
        path: '/login',
        Component: Login,
      },
      {
        path: '/register',
        Component: Register,
      },
      {
        path: '/verify',
        Component: Verify,
      },
      {
        path: '/select-role',
        element: <RoleSelectionPage />,
      },
    ],
  },
]);
