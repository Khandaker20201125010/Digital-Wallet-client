
import DashboardOverview from "@/pages/DashBoard/User/DashboardOverview";
import Deposit from "@/pages/DashBoard/User/Deposit";
import SendMoney from "@/pages/DashBoard/User/SendMoney";
import Transactions from "@/pages/DashBoard/User/Transactions";
import UserProfile from "@/pages/DashBoard/User/UserProfile";
import Withdraw from "@/pages/DashBoard/User/Withdraw";
import type { ISidebarItem } from "@/redux/Ineterfaces/index.interface";

export const UserSideBar: ISidebarItem[]  = [
    {
      title: "User Dashboard",
    

      items: [
      { title: "Profile", url: "/user/userProfile", component: UserProfile },
      { title: "Overview", url: "/user/dashboardOverview", component:DashboardOverview  },
      { title: "Deposit (Agent Cash-In)", url: "/user/deposit", component: Deposit },
      { title: "Withdraw", url: "/user/withdraw", component: Withdraw },
      { title: "Send Money", url: "/user/send", component: SendMoney },
      { title: "Transactions", url: "/user/transactions", component: Transactions },
    ],
    },
  ];