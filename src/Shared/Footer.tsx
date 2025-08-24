import logo from '../assets/images/logo.png';
import googleicon from '../assets/google-play-svgrepo-com.svg';
const GitHubIcon = ({ size = 24, className = '' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.087-.731.084-.716.084-.716 1.205.082 1.838 1.215 1.838 1.215 1.07 1.835 2.809 1.305 3.492.998.108-.776.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.046.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

const TwitterIcon = ({ size = 24, className = '' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.594 0-6.492 2.901-6.492 6.492 0 .512.057 1.01.173 1.496-5.405-.271-10.187-2.86-13.387-6.795-.56.96-.883 2.077-.883 3.256 0 2.254 1.147 4.243 2.887 5.419-.847-.025-1.649-.26-2.35-.647-.029.749.208 1.45.746 2.005.679.679 1.574 1.186 2.603 1.307-.207.056-.424.086-.647.086-.159 0-.315-.015-.467-.045.767 2.405 2.989 4.168 5.636 4.217-2.868 2.247-6.49 3.586-10.462 3.586-.681 0-1.35-.039-2.006-.118 3.692 2.378 8.016 3.766 12.692 3.766 15.232 0 23.52-12.69 23.52-23.52 0-.357-.012-.71-.031-1.063z" />
  </svg>
);

const LinkedInIcon = ({ size = 24, className = '' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const Footer = () => {
  return (
    <footer className="font-inter border-t border-gray-200 bg-gradient-to-r from-gray-50 to-gray-100 px-4 py-12 text-gray-900 dark:border-gray-800 dark:from-gray-900 dark:to-black dark:text-white">
      <div className="container mx-auto grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
        <div className="space-y-4">
          <div className="flex items-center">
            <img className="h-16 w-16" src={logo} alt="WaveFunds" />
            <h3 className="bg-gradient-to-r from-purple-500 via-purple-500 to-pink-500 bg-clip-text text-3xl font-extrabold text-transparent">
              WaveFunds
            </h3>
          </div>
          <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
            Innovating for a better tomorrow. We are committed to delivering
            high-quality solutions that empower businesses and individuals.
          </p>
          <div className="flex space-x-5 pt-2">
            <a
              href="#"
              className="transform text-gray-500 transition-transform hover:scale-110 hover:text-purple-600 dark:text-gray-400 dark:hover:text-teal-400"
            >
              <GitHubIcon size={28} />
            </a>
            <a
              href="#"
              className="transform text-gray-500 transition-transform hover:scale-110 hover:text-purple-600 dark:text-gray-400 dark:hover:text-teal-400"
            >
              <TwitterIcon size={28} />
            </a>
            <a
              href="#"
              className="transform text-gray-500 transition-transform hover:scale-110 hover:text-purple-600 dark:text-gray-400 dark:hover:text-teal-400"
            >
              <LinkedInIcon size={28} />
            </a>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
            Contact Us
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            123 Tech Avenue, Innovation City, 98765
          </p>
          <p className="text-gray-600 dark:text-gray-300">
            Email: info@yourbrand.com
          </p>
          <p className="text-gray-600 dark:text-gray-300">
            Phone: +1 (555) 123-4567
          </p>
        </div>
        <div>
          <h1 className="text-2xl font-bold text-gray-900 uppercase dark:text-gray-100">
            Download the app
          </h1>
          <p className="mt-5 text-gray-600 dark:text-gray-300">
            We suggest connecting to the apps you use for work
          </p>
          <div className="mt-5 flex flex-col space-x-4 md:flex-row">
            <div className="flex gap-4">
              {/* App Store Button */}
              <a
                href="#"
                className="flex items-center gap-2 rounded-lg border border-purple-400 bg-gradient-to-r from-purple-900/40 to-purple-400/40 px-4 py-3 text-black transition-all duration-300 hover:scale-105 hover:from-purple-900 hover:to-purple-950 hover:text-white dark:text-white"
              >
                {/* Apple Logo */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M16.365 1.43c-.892.052-1.942.587-2.578 1.3-.565.64-1.046 1.707-.863 2.692.927.07 1.898-.474 2.507-1.204.58-.698 1.003-1.67.934-2.659zM20.08 17.1c-.401.89-.598 1.29-1.118 2.08-.726 1.08-1.751 2.425-3.018 2.437-1.127.01-1.417-.716-2.95-.707-1.532.01-1.856.722-2.983.711-1.267-.012-2.234-1.23-2.96-2.31-2.027-3.017-2.24-6.553-1-8.427.887-1.373 2.278-2.183 3.591-2.183 1.34 0 2.186.741 3.295.741 1.076 0 1.729-.744 3.292-.744 1.175 0 2.417.643 3.304 1.75-2.9 1.588-2.428 5.737.547 7.352z" />
                </svg>
                <span className="text-left">
                  <p className="text-xs">Download on the</p>
                  <p className="text-sm font-semibold">App Store</p>
                </span>
              </a>

              {/* Google Play Button */}
              <a
                href="#"
                className="flex items-center gap-2 rounded-lg border border-purple-400 bg-gradient-to-r from-purple-900/60 to-pink-400/30 px-4 py-3 text-black transition-all duration-300 hover:scale-105 hover:from-purple-950/50 hover:to-pink-950/50 hover:text-white dark:text-white"
              >
                {/* Google Play Icon */}
                <img className="h-6 w-6" src={googleicon} alt="" />
                <span className="text-left">
                  <p className="text-xs">GET IT ON</p>
                  <p className="text-sm font-semibold">Google Play</p>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-200 pt-10 text-center text-sm text-gray-500 dark:border-gray-700 dark:text-gray-400">
        <p>
          &copy; {new Date().getFullYear()} Your Brand. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
