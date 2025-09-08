import FeaturesOverview from '@/components/FeaturesOverview/FeaturesOverview';
import feturesImage from '../assets/images/feture.jpg';
import GlobalBodyBanner from '@/utils/GlobalBodyBanner';
const features = [
  {
    title: 'Pay Bills',
    description: 'Pay your utility bills easily and quickly.',
    icon: '💳',
  },
  {
    title: 'Deposit/CashIn',
    description: 'Deposit money into your account with ease.',
    icon: '💰',
  },
  {
    title: 'Online Funds Transfer',
    description: 'Transfer money online to anyone, anywhere.',
    icon: '💸',
  },
  {
    title: 'Money Investment',
    description: 'Grow your wealth with smart investment options.',
    icon: '📈',
  },
  {
    title: 'Digital Wallet',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    icon: '📱',
  },
];

const Features = () => {
  return (
    <section className="px-6 py-12 text-white">
      {/* freture banner */}
      <div data-aos="flip-right" data-aos-duration="1500" className="featureBG relative h-[400px] w-full overflow-hidden rounded-xl">
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Content */}
        <div className="relative z-10 flex h-full w-full flex-col items-center justify-center px-4 text-center">
          <h1 className="bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-5xl font-extrabold text-transparent uppercase">
            Features
          </h1>
          <p className="mt-5 text-xl font-bold text-white uppercase md:text-2xl">
            A fintech solution with innovative features
            <br />
            designed to simplify your financial life.
          </p>
        </div>
      </div>

      <div className="m-12 w-full mx-auto">
        <FeaturesOverview></FeaturesOverview>
      </div>
      <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2">
        {/* Left Content */}
        <div>
          <h2 className="text-3xl leading-snug font-bold md:text-4xl">
            Presenting our <br />
            <span className="bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent">
              Featured Services
            </span>
          </h2>
          {/* Placeholder for your image */}
          <div data-aos="zoom-in" data-aos-duration="1500" className="mt-6 h-64 w-full overflow-hidden rounded-xl">
            <img
              className="h-full w-full object-cover"
              src={feturesImage}
              alt="Features"
            />
          </div>
        </div>

        {/* Right Features List */}
        <div className="cursor-pointer space-y-4">
          {features.map((feature, index) => (
            <div data-aos="flip-left" data-aos-duration="1500"
              key={index}
              className="flex items-start gap-4 rounded-xl bg-gradient-to-r from-pink-500 to-purple-500 p-4 shadow-md"
            >
              <div className="text-2xl">{feature.icon}</div>
              <div>
                <h3 className="text-lg font-semibold">{feature.title}</h3>
                <p className="text-sm text-gray-100">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <GlobalBodyBanner></GlobalBodyBanner>
    </section>
  );
};

export default Features;
