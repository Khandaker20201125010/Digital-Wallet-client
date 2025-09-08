import { useUserInfoQuery } from "@/redux/features/auth/auth.api";
import type { TRole } from "@/redux/Ineterfaces/index.interface";

import { type ComponentType } from "react";
import { Navigate } from "react-router";

export const withAuth = (
  Component: ComponentType,
  requiredRoles?: TRole | TRole[]
) => {
  return function AuthWrapper() {
    const { data, isLoading } = useUserInfoQuery(undefined);

    // Not logged in → redirect to login
    if (!isLoading && !data?.data?.email) {
      return <Navigate to="/login" />;
    }

    if (requiredRoles && !isLoading) {
      const rolesArray = Array.isArray(requiredRoles)
        ? requiredRoles
        : [requiredRoles];

      if (!rolesArray.includes(data?.data?.role as TRole)) {
        return <Navigate to="/unauthorized" />;
      }
    }

    return <Component />;
  };
};
