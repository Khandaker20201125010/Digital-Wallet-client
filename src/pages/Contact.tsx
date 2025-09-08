import ContactForm from '@/components/ContactForm';
import { Mail, MapPin, Phone } from 'lucide-react';


const Contact = () => {
  return (
    <div>
      <div
        data-aos="flip-right"
        data-aos-duration="1500"
        className="contactBG relative h-[400px] w-full overflow-hidden"
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative z-10 flex h-full w-full flex-col items-center justify-center px-4 text-center">
          <h1 className="bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-5xl font-extrabold text-transparent uppercase">
            Contact Us
          </h1>
          <p className="mt-5 text-xl font-bold text-white uppercase md:text-2xl">
            We'd love to hear from you
          </p>
        </div>
      </div>
      <div className=" p-2">
        <div className="mt-4 flex flex-col items-center justify-center">
          <MapPin className="m-auto text-center text-4xl text-red-700" />
          <h3 className="mb-2 text-center text-2xl font-semibold text-black dark:text-white">
            Our Location
          </h3>
        </div>
        <div className="w-full rounded-lg p-8">
          <iframe
            className="h-[300px] w-full "
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d919.094361843567!2d89.5253752695489!3d22.86251123445304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjLCsDUxJzQ1LjAiTiA4OcKwMzEnMzMuNyJF!5e0!3m2!1sen!2sbd!4v1731098432634!5m2!1sen!2sbd"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
       <section className="w-full py-16 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">
          How Can We Help?
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Address */}
          <div className="rounded-xl p-6 bg-gradient-to-r from-purple-400 to-pink-400 text-white dark:from-purple-600 dark:to-pink-600 shadow-lg">
            <div className="flex items-center gap-3 mb-3">
              <MapPin className="w-6 h-6" />
              <h3 className="text-lg font-semibold">Address</h3>
            </div>
            <p className="text-sm">
              Khulna City, Bangladesh
            </p>
          </div>

          {/* Email */}
          <div className="rounded-xl p-6 bg-gradient-to-r from-purple-400 to-pink-400 text-white dark:from-purple-600 dark:to-pink-600 shadow-lg">
            <div className="flex items-center gap-3 mb-3">
              <Mail className="w-6 h-6" />
              <h3 className="text-lg font-semibold">Email Address</h3>
            </div>
            <p className="text-sm">support@example.com</p>
            <p className="text-sm">prantokih42@example.com</p>
          </div>

          {/* Phone */}
          <div className="rounded-xl p-6 bg-gradient-to-r from-purple-400 to-pink-400 text-white dark:from-purple-600 dark:to-pink-600 shadow-lg">
            <div className="flex items-center gap-3 mb-3">
              <Phone className="w-6 h-6" />
              <h3 className="text-lg font-semibold">Phone</h3>
            </div>
            <p className="text-sm">(+88) 34 5678 9100</p>
            <p className="text-sm">(+88) 34 5678 9101</p>
          </div>
        </div>
      </div>
    </section>
      <ContactForm></ContactForm>
    </div>
  );
};

export default Contact;
