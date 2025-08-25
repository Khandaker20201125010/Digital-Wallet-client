import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";

export default function Verify() {
  const location = useLocation();
  const navigate = useNavigate();
  const [email] = useState(location.state);

  useEffect(() => {
    if (!email) {
      navigate("/");
    }
  }, [email]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4">
      <h1 className="text-2xl font-bold"> This is Verify component </h1>
        <p className="text-center">Verification email sent to {email}</p>
    </div>
  );
}