
import UserProfile from "@/pages/DashBoard/User/UserProfile";
import type { ISidebarItem } from "@/redux/Ineterfaces/index.interface";

export const UserSideBar: ISidebarItem[]  = [
    {
      title: "User Dashboard",
    

      items: [
        {
          title: "Profile",
          url: "/user/userProfile",
          component: UserProfile,
        },
   
      ],
    },
  ];