import ManageUsers from '@/pages/DashBoard/Admin/ManageUsers';
import AgentProfile from '@/pages/DashBoard/Agent/AgentProfile';
import type { ISidebarItem } from '@/redux/Ineterfaces/index.interface';

export const AgentSideBar: ISidebarItem[] = [
  {
    title: 'Agent Dashboard',

    items: [
      {
        title: 'Agent Profile',
        url: '/agent/agentProfile',
        component: AgentProfile,
      },
    ],
  },
];
