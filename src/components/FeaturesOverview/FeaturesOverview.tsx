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
      gradient: 'bg-gradient-to-tr from-indigo-700 via-purple-500 to-indigo-800',
    },
    {
      id: 4,
      title: 'Funds Transfer',
      description: 'Send money to anyone instantly.',
      icon: <ArrowUp size={30} />,
      gradient: 'bg-gradient-to-tr from-purple-500 via-indigo-500 to-purple-500',
    },
  ];

  return (
    <section className="px-5 py-20 text-gray-100 dark:from-gray-900 dark:to-gray-800 dark:text-gray-100">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 md:flex-row">
        {/* Left Features Grid */}
        <div data-aos="fade-right" data-aos-duration="1500" className="grid flex-1 grid-cols-1 gap-6 sm:grid-cols-2">
          {features.map((feature) => (
            <div
              key={feature.id}
              className={`flex items-start gap-4 rounded-xl bg-gradient-to-r ${feature.gradient} p-6 shadow-md transition-all duration-300 hover:shadow-lg hover:shadow-purple-600 dark:bg-gray-800`}
            >
              <div className="text-gray-100">
                {feature.icon}
              </div>
              <div>
                <h3 className="text-lg font-semibold">{feature.title}</h3>
                <p className="mt-1 text-sm text-gray-300 ">
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
  className="relative flex-1 space-y-6 text-black dark:text-gray-300"
>
  {/* Background blur circle */}
  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[550px] w-[300px] rounded-full bg-purple-500 opacity-50 blur-[180px] dark:bg-purple-700 z-0"></div>

  {/* Foreground text */}
  <h1 className="relative text-4xl font-bold md:text-5xl z-10">
    Your Money, Your Way,{' '}
    <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
      Our Guarantee
    </span>
  </h1>

  <p className="relative text-gray-800 dark:text-gray-300 z-10">
    Manage your finances easily and securely. Enjoy seamless payments,
    transfers, investments, and wallet management.
  </p>

  <button className="group relative z-10 mt-6 inline-block cursor-pointer overflow-hidden rounded-full border-2 border-purple-500 bg-gradient-to-r from-blue-950 via-purple-950 to-blue-950 px-6 py-3 font-sans text-base font-bold text-white max-sm:w-full dark:text-white">
    <span className="absolute inset-0 z-[-1] -translate-x-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-transform duration-300 ease-in-out group-hover:translate-x-0"></span>
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
