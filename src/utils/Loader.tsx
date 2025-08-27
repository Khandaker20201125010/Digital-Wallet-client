import logo from '../assets/images/logo.png';
const Loader = () => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="relative h-64 w-64">
        {' '}
        {/* Bigger size */}
        {/* Center logo */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-blue-500 shadow-lg">
            <img src={logo} alt="Logo" className="h-12 w-12" />
          </div>
        </div>
        {/* Orbit path */}
        <div className="animate-spin-slow absolute inset-0 rounded-full border-2 border-dashed border-gray-600"></div>
        {/* Orbiting elements */}
        <div className="animate-spin-slow absolute h-full w-full">
          {/* Circle */}
          <div className="absolute -top-2 left-1/2 h-8 w-8 -translate-x-1/2 rounded-full bg-gradient-to-r from-pink-500 to-purple-400"></div>
          {/* Diamond */}
          <div className="absolute top-1/2 -right-2 h-8 w-8 -translate-y-1/2 rotate-45 bg-gradient-to-r from-purple-500 to-pink-400"></div>
          {/* Triangle */}
          <div className="absolute -bottom-5 left-1/2 h-0 w-0 -translate-x-1/2 border-t-[36px] border-r-[20px] border-l-[20px] border-t-purple-400 border-r-transparent border-l-transparent"></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
