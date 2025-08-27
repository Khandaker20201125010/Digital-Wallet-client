import React, { useEffect } from "react";
import RoleModal from "@/components/ui/RoleModal";
import { useNavigate, useSearchParams } from "react-router";
import { useUpdateUserMutation } from "@/redux/features/auth/auth.api";

const RoleSelectionPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [updateUser] = useUpdateUserMutation();
  const isFirstLogin = searchParams.get("firstLogin") === "true";

  useEffect(() => {
    if (!isFirstLogin) {
      navigate("/");
    }
  }, [isFirstLogin, navigate]);

  const handleRoleSelect = async (role: "USER" | "AGENT") => {
    try {
      await updateUser({ role, firstGoogleLogin: false }).unwrap();
      navigate("/");
    } catch (error) {
      console.error("Failed to update role:", error);
    }
  };

  if (!isFirstLogin) return null;

  return (
    <div className="flex items-center justify-center min-h-screen">
      <RoleModal open={true} onClose={() => {}} onSelect={handleRoleSelect} />
    </div>
  );
};

export default RoleSelectionPage;
