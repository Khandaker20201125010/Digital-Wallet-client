import { User, CreditCard, TrendingUp, ArrowUp } from 'lucide-react';
import { Link } from 'react-router';

const FeaturesOverview = () => {
  const features = [
    {
      id: 1,
      title: 'Bank Account',
      description: 'Manage your bank accounts seamlessly.',
      icon: <User size={30} />,
      gradient: 'bg-gradient-to-tr from-green-400 via-blue-500 to-purple-600',
    },
    {
      id: 2,
      title: 'Easy Payment',
      description: 'Pay bills and merchants quickly.',
      icon: <CreditCard size={30} />,
      gradient: 'from-blue-900 via-purple-700 to-pink-300 ',
    },
    {
      id: 3,
      title: 'Investments',
      description: 'Track and grow your investments.',
      icon: <TrendingUp size={30} />,
      gradient:
        'bg-gradient-to-tr from-indigo-700 via-purple-500 to-indigo-800',
    },
    {
      id: 4,
      title: 'Funds Transfer',
      description: 'Send money to anyone instantly.',
      icon: <ArrowUp size={30} />,
      gradient:
        'bg-gradient-to-tr from-purple-500 via-indigo-500 to-purple-500',
    },
  ];

  return (
    <section className="px-4 py-16 text-gray-100 sm:px-6 sm:py-20 lg:px-8 lg:py-24 dark:from-gray-900 dark:to-gray-800 dark:text-gray-100">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 md:gap-12 lg:flex-row">
        {/* Left Features Grid */}
        <div
          data-aos="fade-right"
          data-aos-duration="1500"
          className="grid w-full flex-1 grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5"
        >
          {features.map((feature) => (
            <div
              key={feature.id}
              className={`flex items-start gap-3 rounded-xl bg-gradient-to-r ${feature.gradient} p-4 shadow-md transition-all duration-300 hover:shadow-lg hover:shadow-purple-600 sm:p-5 md:p-6 dark:bg-gray-800`}
            >
              <div className="mt-1 text-gray-100 sm:mt-0">{feature.icon}</div>
              <div>
                <h3 className="text-base font-semibold sm:text-lg">
                  {feature.title}
                </h3>
                <p className="mt-1 text-xs text-gray-300 sm:text-sm">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Text */}
        <div
          data-aos="fade-up"
          data-aos-duration="1500"
          className="relative flex-1 space-y-4 text-center text-black sm:space-y-5 sm:text-left md:space-y-6 dark:text-gray-300"
        >
          {/* Background blur circle */}
          <div className="absolute top-1/2 left-1/2 z-0 h-[300px] w-[200px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500 opacity-50 blur-[100px] sm:h-[400px] sm:w-[250px] sm:blur-[120px] md:h-[550px] md:w-[300px] md:blur-[180px] dark:bg-purple-700"></div>

          {/* Foreground text */}
          <h1 className="relative z-10 text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl">
            Your Money, Your Way,{' '}
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              Our Guarantee
            </span>
          </h1>

          <p className="relative z-10 text-sm text-gray-800 sm:text-base dark:text-gray-300">
            Manage your finances easily and securely. Enjoy seamless payments,
            transfers, investments, and wallet management.
          </p>

          <button className="group relative z-10 mt-4 inline-block cursor-pointer overflow-hidden rounded-full border-2 border-purple-500 bg-gradient-to-r from-blue-950 via-purple-950 to-blue-950 px-5 py-2 font-sans text-sm font-bold text-white max-sm:w-full sm:mt-5 sm:px-6 sm:py-3 sm:text-base md:mt-6 dark:text-white">
            <span className="absolute inset-0 z-[-1] translate-x-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-transform duration-300 ease-in-out group-hover:translate-x-0"></span>
            <Link to="/features">
              <span className="relative"> Get Started</span>
            </Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturesOverview;
