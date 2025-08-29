import { role } from "@/constant/role";
import type { TRole } from "@/redux/Ineterfaces/index.interface";
import { AdminSidebar } from "@/Routes/AdminSidebar";
import { AgentSideBar } from "@/Routes/AgentSideBar";
import { UserSideBar } from "@/Routes/UserSideBar";

export const getSidebarItems = (userRole: TRole) => {
  switch (userRole) {
    case role.superAdmin:
      return [...AdminSidebar];
    case role.admin:
      return [...AdminSidebar];
    case role.user:
      return [...UserSideBar];
    case role.agent:
      return [...AgentSideBar];
    default:
      return [];
  }
};