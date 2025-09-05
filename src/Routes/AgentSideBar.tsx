import AddMoney from '@/pages/DashBoard/Agent/AddMoney';
import AgentDashboardOverview from '@/pages/DashBoard/Agent/AgentDashboardOverview';
import AgentProfile from '@/pages/DashBoard/Agent/AgentProfile';
import Transactions from '@/pages/DashBoard/Agent/Transactions';
import WithdrawMoney from '@/pages/DashBoard/Agent/WithdrawMoney';

export const AgentSideBar = [
  {
    title: 'Agent Dashboard',
    items: [
      {
        title: 'Agent Profile',
        url: '/agent/profile',
        component: AgentProfile,
      },
      { title: 'Add Money', url: '/agent/add-money', component: AddMoney },
      {
        title: 'Withdraw Money',
        url: '/agent/withdraw',
        component: WithdrawMoney,
      },
      {
        title: 'Transactions',
        url: '/agent/transactions',
        component: Transactions,
      },
    ],
  },
];
