import Main from '@/Layouts/Main';
import About from '@/pages/About';
import Contact from '@/pages/Contact';
import FAQ from '@/pages/FAQ';
import Features from '@/pages/Features';

import Home from '@/pages/Home';
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
    ],
  },
]);
