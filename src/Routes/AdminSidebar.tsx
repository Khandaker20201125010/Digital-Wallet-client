import type { ISidebarItem } from "@/redux/Ineterfaces/index.interface";
import { lazy } from "react";

// Lazy imports for all admin pages
const AdminProfile = lazy(() => import("@/pages/DashBoard/Admin/AdminProfile"));
const AdminOverview = lazy(() => import("@/pages/DashBoard/Admin/AdminOverview"));
const ManageUsers = lazy(() => import("@/pages/DashBoard/Admin/ManageUsers"));
const ManageAgents = lazy(() => import("@/pages/DashBoard/Admin/ManageAgents"));
const Transactions = lazy(() => import("@/pages/DashBoard/Admin/Transactions"));
const SystemSettings = lazy(() => import("@/pages/DashBoard/Admin/SystemSettings"));

export const AdminSidebar: ISidebarItem[] = [
  {
    title: "Dashboard",
    items: [
      {
        title: "Overview",
        url: "/admin/overview",
        component: AdminOverview,
      },
    ],
  },
  {
    title: "Management",
    items: [
      {
        title: "Users",
        url: "/admin/users",
        component: ManageUsers,
      },
      {
        title: "Agents",
        url: "/admin/agents",
        component: ManageAgents,
      },
      {
        title: "Transactions",
        url: "/admin/transactions",
        component: Transactions,
      },
    ],
  },
  {
    title: "Settings",
    items: [
      {
        title: "System Settings",
        url: "/admin/system-settings",
        component: SystemSettings,
      },
      {
        title: "Admin Profile",
        url: "/admin/adminProfile",
        component: AdminProfile,
      },
    ],
  },
];
