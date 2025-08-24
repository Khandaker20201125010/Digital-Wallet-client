// SendMoneyPayment.jsx
import React from 'react';
import { FaTelegramPlane, FaCheckCircle } from 'react-icons/fa';

import digitalMobilePayment from '../../assets/images/digitalMobilePayment.png';

const SendMoneyPayment = () => {
  return (
    <div className="container mx-auto flex w-full flex-col items-center justify-between gap-12 px-6 py-16 text-black lg:flex-row dark:text-white">
      {/* Left Section */}
      <div data-aos="fade-up" data-aos-duration="1500" className="flex-1 space-y-6">
        <h2 className="text-[28px] leading-tight font-bold sm:text-4xl md:text-5xl">
          You Can Send Money On <br />
          Your{' '}
          <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            Finger Tips
          </span>
        </h2>

        {/* Sending / Receiving Card */}
        {/* - default: mobile narrow card (320-style)
            - md: tablet (768-style)
            - lg+: desktop (1024+ keep original design) */}
        <div className="relative mx-auto w-full max-w-[600px] max-sm:max-w-[320px] rounded-2xl border border-purple-700 bg-white/5 p-4 pb-14 sm:p-5  md:p-6 lg:p-6">
          {/* Sender */}
          <div className="mb-4 flex items-center justify-between gap-3">
            <div className="flex min-w-0 flex-1 items-center gap-3">
              <div className="flex min-w-0 flex-col">
                <p className="text-xs font-semibold text-purple-400 sm:text-sm">
                  John Smith Sending
                </p>
                <div className="mt-2 flex w-44 items-center gap-3 rounded-lg border bg-purple-100 px-3 py-2  sm:w-64">
                  <img
                    src="https://i.pravatar.cc/40?img=3"
                    alt="Sender"
                    className="h-8 w-8 rounded-full sm:h-10 sm:w-10"
                  />
                  <p className="truncate text-base font-bold text-purple-500 sm:text-lg">
                    $466.5
                  </p>
                </div>
              </div>
            </div>

            {/* Flag */}
            <div className="ml-2 flex-shrink-0">
              <img
                src="https://flagcdn.com/us.svg"
                alt="USA"
                className="md:mx-40 h-10 w-10 rounded-full border object-cover sm:h-12 sm:w-12"
              />
            </div>
          </div>

          {/* Icon + Success Pill */}
        
          <div className="relative mb-6 flex items-center justify-center md:justify-center lg:justify-start">
            {/* Telegram Icon circle */}
            <div className="md:mx-62 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-xl text-white shadow-lg sm:h-12 sm:w-12 sm:text-2xl">
              <FaTelegramPlane />
            </div>

            {/* Success Pill - responsive positioning / size */}
            <div
              className={
                'flex items-center gap-3 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-3 text-sm font-medium text-white shadow-md ' +
                'absolute -bottom-48 left-1/2 w-[90%] -translate-x-1/2 justify-center' +
                'md:-bottom-14 md:w-[80%] md:gap-4 md:px-5 md:py-3 md:text-sm' +
                'lg:static lg:left-96 lg:-bottom-5 lg:ml-4 lg:w-3/6 lg:translate-x-0 lg:justify-start'
              }
            >
              <FaCheckCircle className="text-2xl md:text-3xl lg:text-4xl" />
              <span className="text-center md:text-left">
                Your Payment has been successful
              </span>
            </div>
          </div>

          {/* Decorative soft circle (like in your screenshots) */}
          <div className="pointer-events-none absolute right-6 -bottom-28 h-10 w-10 rounded-full bg-white/20 blur-sm md:right-8 md:-bottom-32" />

          {/* Receiver */}
          <div className="mt-8 flex items-center justify-between gap-3">
            <div className="flex min-w-0 flex-1 items-center gap-3">
              <div className="flex min-w-0 flex-col">
                <p className="text-xs font-semibold text-purple-400 sm:text-sm">
                  William Receiving
                </p>
                <div className="mt-2 flex w-44 items-center gap-3 rounded-lg border bg-purple-100 px-3 py-2 sm:w-64">
                  <img
                    src="https://i.pravatar.cc/40?img=5"
                    alt="Receiver"
                    className="h-8 w-8 rounded-full sm:h-10 sm:w-10"
                  />
                  <p className="truncate text-base font-bold text-purple-500 sm:text-lg">
                    $466.5
                  </p>
                </div>
              </div>
            </div>

            {/* Flag */}
            <div className="ml-2 flex-shrink-0">
              <img
                src="https://flagcdn.com/au.svg"
                alt="Australia"
                className="md:mx-44 h-10 w-10 rounded-full border object-cover sm:h-12 sm:w-12"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Right Section - the phone image */}
      <div data-aos="zoom-in" data-aos-duration="1500" className="relative mt-6 flex flex-1 justify-center lg:mt-0">
        <img
          src={digitalMobilePayment}
          alt="Digital Payment"
          className="w-[320px] object-contain drop-shadow-2xl sm:w-[260px] md:w-[720px] lg:w-[380px] xl:w-[420px]"
        />
      </div>
    </div>
  );
};

export default SendMoneyPayment;
