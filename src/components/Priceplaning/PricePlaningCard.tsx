import React from 'react';

const PricePlaningCard = () => {
  return (
    <div className="mx-auto flex w-full flex-col items-start gap-8 px-4 py-12 text-black md:flex-row md:justify-center md:gap-12 dark:text-white">
      {/* Personal Plan */}
      <div className="flex w-full flex-col gap-6 rounded-2xl border border-gray-200 bg-white p-8 text-start shadow-lg md:w-[45%] dark:border-gray-700 dark:bg-gray-800">
        <h1 className="text-3xl font-bold">Personal</h1>
        <p className="text-gray-600 dark:text-gray-300">
          Perfect for individuals to manage daily expenses. Send, receive, and
          store money securely anytime, anywhere.
        </p>

        <div className="my-4 flex gap-2">
          <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-5xl font-bold text-transparent">
            $15
          </span>
          <p className="mt-2 text-gray-500 dark:text-gray-400">
            Per user/per month billed annually
          </p>
        </div>

        <button className="mt-4 w-full rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 py-3 font-semibold text-white transition-all hover:from-purple-600 hover:to-pink-600">
          Get Started
        </button>
      </div>

      {/* Basic Plan */}
      <div className="flex w-full flex-col gap-6 rounded-2xl border border-gray-200 bg-white p-8 text-start shadow-lg md:w-[45%] dark:border-gray-700 dark:bg-gray-800">
        <h1 className="text-3xl font-bold">Basic</h1>
        <p className="text-gray-600 dark:text-gray-300">
          Ideal for merchants and small businesses. Accept customer payments,
          track transactions, and grow faster.
        </p>

        <div className="my-4 flex gap-2">
          <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-5xl font-bold text-transparent">
            $15
          </span>
          <p className="mt-2 text-gray-500 dark:text-gray-400">
            Per user/per month billed annually
          </p>
        </div>

        <button className="mt-4 w-full rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 py-3 font-semibold text-white transition-all hover:from-purple-600 hover:to-pink-600">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default PricePlaningCard;
