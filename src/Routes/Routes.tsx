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
import { generateRoutes } from '@/utils/generateRoutes';

import ScrollToTop from '@/utils/ScrollToTop';
import { createBrowserRouter, Navigate } from 'react-router';
import { AdminSidebar } from './AdminSidebar';
import DashboardLayout from '@/pages/DashBoard/DashboardLayouts';
import { UserSideBar } from './UserSideBar';
import { AgentSideBar } from './AgentSideBar';
import Unauthorized from '@/utils/Unauthorized';
import { withAuth } from '@/utils/withAuth';
import { role } from '@/constant/role';
import type { TRole } from '@/redux/Ineterfaces/index.interface';

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
        Component: withAuth(Features),
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
        path: '/unauthorized',
        Component: Unauthorized,
      },
      {
        path: '/select-role',
        Component: DashboardLayout,
        element: <RoleSelectionPage />,
      },
    ],
  },
  {
    path: '/admin',
    Component: withAuth(DashboardLayout, role.superAdmin as TRole),
    children: [
      { index: true, element: <Navigate to="/admin/adminProfile" /> },
      ...generateRoutes(AdminSidebar),
    ],
  },
  {
    path: '/user',
    Component: withAuth(DashboardLayout, role.user as TRole),
    children: [
      { index: true, element: <Navigate to="/user/userProfile" /> },
      ...generateRoutes(UserSideBar),
    ],
  },
  {
    path: '/agent',
    Component: withAuth(DashboardLayout, role.agent as TRole),
    children: [
      { index: true, element: <Navigate to="/agent/profile" /> },
      ...generateRoutes(AgentSideBar),
    ],
  },
]);
