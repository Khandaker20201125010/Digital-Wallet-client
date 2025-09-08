import { ShieldAlert, Home } from "lucide-react";
import { useNavigate } from "react-router";


const Unauthorized = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-6">
      <div className="bg-white shadow-lg rounded-2xl p-10 text-center max-w-md w-full">
        <div className="flex justify-center">
          <div className="bg-red-100 p-4 rounded-full">
            <ShieldAlert className="h-12 w-12 text-red-600" />
          </div>
        </div>
        <h1 className="mt-6 text-2xl font-bold text-gray-800">
          Access Denied
        </h1>
        <p className="mt-2 text-gray-600">
          You don’t have permission to view this page in your Digital Wallet.
        </p>

        <button
          onClick={() => navigate("/")}
          className="mt-6 cursor-pointer inline-flex items-center gap-2 bg-red-600 text-white px-5 py-2.5 rounded-xl hover:bg-red-700 transition-all"
        >
          <Home className="h-5 w-5" />
          Go Back to Home
        </button>
      </div>
    </div>
  );
};

export default Unauthorized;
