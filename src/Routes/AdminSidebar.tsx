import ManageUsers from "@/pages/DashBoard/Admin/ManageUsers";
import type { ISidebarItem } from "@/redux/Ineterfaces/index.interface";

export const AdminSidebar: ISidebarItem[]  = [
    {
      title: "Dashboard",
    

      items: [
        {
          title: "Manage-users ",
          url: "/admin/manageUsers",
          component: ManageUsers,
        },
   
      ],
    },
  ];