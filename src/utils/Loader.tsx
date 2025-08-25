import logo from "../assets/images/logo.png";
const Loader = () => {
  return (
  <div className="flex items-center justify-center min-h-screen">
  <div className="relative w-64 h-64"> {/* Bigger size */}
    {/* Center logo */}
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-20 h-20 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 flex items-center justify-center shadow-lg">
        <img src={logo} alt="Logo" className="w-12 h-12" />
      </div>
    </div>

    {/* Orbit path */}
    <div className="absolute inset-0 rounded-full border-2 border-dashed border-gray-600 animate-spin-slow"></div>

    {/* Orbiting elements */}
    <div className="absolute w-full h-full animate-spin-slow">
      {/* Circle */}
      <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-r from-pink-500 to-purple-400"></div>
      {/* Diamond */}
      <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-6 h-6 rotate-45 bg-gradient-to-r from-purple-500 to-pink-400"></div>
      {/* Triangle */}
      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[10px] border-r-[10px] border-t-[18px] border-l-transparent border-r-transparent border-t-purple-400"></div>
    </div>
  </div>
</div>

  );
};

export default Loader;
