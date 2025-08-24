import { FaStar, FaQuoteRight } from 'react-icons/fa';

const testimonials = [
  {
    name: 'John Smith',
    role: 'Financial Analyst',
    image: 'https://i.pravatar.cc/80?img=12',
    text: 'WaveFunds has completely transformed how I manage my finances. The seamless transactions and intuitive interface make banking a pleasure rather than a chore.',
    gradient: 'bg-gradient-to-r from-purple-600 to-indigo-500',
    rating: 5,
    style: 'lg:translate-x-6', // shift right
  },
  {
    name: 'Sarah Johnson',
    role: 'Small Business Owner',
    image: 'https://i.pravatar.cc/80?img=8',
    text: 'As someone who sends international payments regularly, WaveFunds has saved me both time and money. The low fees and fast processing are unmatched.',
    gradient: 'bg-gradient-to-r from-blue-800 to-cyan-400',
    rating: 5,
    style: 'lg:-translate-x-6', // shift left
  },
  {
    name: 'Michael Chen',
    role: 'Freelancer',
    image: 'https://i.pravatar.cc/80?img=5',
    text: "The security features give me peace of mind, and the mobile app is incredibly responsive. I've recommended WaveFunds to all my colleagues.",
    gradient: 'bg-gradient-to-r from-purple-800 to-pink-400',
    rating: 4,
    style: 'lg:translate-x-12', // more shift right
  },
];

const Testimonials = () => {
  return (
    <div className="px-6 py-16 md:px-12 lg:px-20">
      <div className="container mx-auto grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        {/* Left Content */}
        <div data-aos="fade-up" data-aos-duration="1500" className="space-y-6">
          <div className="absolute h-[450px] w-[600px] rounded-full bg-purple-500 opacity-50 blur-[180px] dark:bg-purple-700"></div>

          <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl">
            What Customers say <br /> About Us
          </h2>
          <p className="max-w-lg text-gray-600 dark:text-gray-300">
            Don't just take our word for it - hear from real users who have
            transformed their financial experience with our secure, intuitive
            platform designed for modern banking.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap gap-8">
            <div>
              <p className="text-3xl font-bold">93k+</p>
              <p className="text-gray-400">Satisfied user</p>
            </div>
            <div>
              <p className="text-3xl font-bold">4.9/5</p>
              <p className="text-gray-400">Client Rating</p>
            </div>
            <div>
              <p className="text-3xl font-bold">100k+</p>
              <p className="text-gray-400">App Download</p>
            </div>
          </div>
        </div>

        {/* Right Testimonials */}
        <div  className="flex flex-col gap-8">
          {testimonials.map((t, i) => (
            <div data-aos="fade-up" data-aos-duration="1500"
              key={i}
              className={`relative rounded-xl ${t.gradient} transform p-6 shadow-lg ${t.style} text-white`}
            >
              {/* Quote icon */}
              <FaQuoteRight className="absolute top-4 right-4 text-2xl opacity-80" />

              {/* Stars */}
              <div className="mb-2 flex text-yellow-300">
                {Array.from({ length: t.rating }).map((_, idx) => (
                  <FaStar key={idx} />
                ))}
              </div>

              {/* User Info */}
              <div className="flex items-center gap-4">
                <img
                  src={t.image}
                  alt={t.name}
                  className="h-14 w-14 rounded-full border-2 border-white/50 object-cover"
                />
                <div>
                  <p className="text-lg font-bold">{t.name}</p>
                  <p className="text-sm text-gray-100">{t.role}</p>
                </div>
              </div>

              {/* Testimonial Text */}
              <p className="mt-4 text-sm text-gray-100">{t.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
