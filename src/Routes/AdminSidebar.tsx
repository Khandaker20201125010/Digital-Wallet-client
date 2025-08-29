// import AdminProfile from "@/pages/DashBoard/Admin/AdminProfile";
import ManageUsers from "@/pages/DashBoard/Admin/ManageUsers";
import type { ISidebarItem } from "@/redux/Ineterfaces/index.interface";
import { lazy } from "react";

const AdminProfile = lazy (() => import("@/pages/DashBoard/Admin/AdminProfile"));

export const AdminSidebar: ISidebarItem[]  = [
    {
      title: "Admin Dashboard",
      items: [
        {
          title: "Admin Profile",
          url: "/admin/adminProfile",
          component: AdminProfile,
        },
   
      ],
    },
  ];