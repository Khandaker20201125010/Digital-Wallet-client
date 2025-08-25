import React, { useState } from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Home, Settings, Bell, User, Menu, X } from 'lucide-react';
import { Link } from 'react-router';
import { ModeToggle } from '@/Layouts/mode-toggle';
import logo from '../assets/images/logo.png';
interface NavItem {
  icon: React.ReactNode;
  label: string;
  path: string;
  gradient: string;
  iconColor: string;
}

const navItems: NavItem[] = [
  {
    icon: <Home className="h-5 w-5" />,
    label: 'Home',
    path: '/', // links to <Route path="/" element={<Home />} />
    gradient:
      'radial-gradient(circle, rgba(59,130,246,0.15) 0%, rgba(37,99,235,0.06) 50%, rgba(29,78,216,0) 100%)',
    iconColor: 'group-hover:text-blue-500 dark:group-hover:text-blue-400',
  },
  {
    icon: <Bell className="h-5 w-5" />,
    label: 'Features',
    path: '/features',
    gradient:
      'radial-gradient(circle, rgba(249,115,22,0.15) 0%, rgba(234,88,12,0.06) 50%, rgba(194,65,12,0) 100%)',
    iconColor: 'group-hover:text-orange-500 dark:group-hover:text-orange-400',
  },
  {
    icon: <Settings className="h-5 w-5" />,
    label: 'About',
    path: '/about',
    gradient:
      'radial-gradient(circle, rgba(34,197,94,0.15) 0%, rgba(22,163,74,0.06) 50%, rgba(21,128,61,0) 100%)',
    iconColor: 'group-hover:text-green-500 dark:group-hover:text-green-400',
  },
  {
    icon: <User className="h-5 w-5" />,
    label: 'Contact',
    path: '/contact',
    gradient:
      'radial-gradient(circle, rgba(239,68,68,0.15) 0%, rgba(220,38,38,0.06) 50%, rgba(185,28,28,0) 100%)',
    iconColor: 'group-hover:text-red-500 dark:group-hover:text-red-400',
  },
  {
    icon: <User className="h-5 w-5" />,
    label: 'FAQ',
    path: '/faq',
    gradient:
      'radial-gradient(circle, rgba(139,92,246,0.15) 0%, rgba(124,58,237,0.06) 50%, rgba(109,40,217,0) 100%)',
    iconColor: 'group-hover:text-violet-500 dark:group-hover:text-violet-400',
  },
];

// Animation Variants
const itemVariants: Variants = {
  initial: { rotateX: 0, opacity: 1 },
  hover: { rotateX: -90, opacity: 0 },
};

const backVariants: Variants = {
  initial: { rotateX: 90, opacity: 0 },
  hover: { rotateX: 0, opacity: 1 },
};

const glowVariants: Variants = {
  initial: { opacity: 0, scale: 0.8 },
  hover: {
    opacity: 1,
    scale: 2,
    transition: {
      opacity: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
      scale: { duration: 0.5, type: 'spring', stiffness: 300, damping: 25 },
    },
  },
};

const navGlowVariants: Variants = {
  initial: { opacity: 0 },
  hover: {
    opacity: 1,
    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
  },
};

const sharedTransition = {
  type: 'spring' as const,
  stiffness: 100,
  damping: 20,
  duration: 0.5,
};

function NavBar(): React.JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <motion.nav
      className="sticky top-0 z-50 w-full overflow-hidden border-b border-gray-200/60 bg-white/70 p-3 shadow-md backdrop-blur-lg dark:border-gray-800/60 dark:bg-black/70"
      initial="initial"
      whileHover="hover"
    >
      {/* Background glow */}
      <motion.div
        className="pointer-events-none absolute -inset-2 z-0 rounded-3xl"
        style={{
          background:
            'radial-gradient(circle, rgba(59,130,246,0.1) 0%, rgba(147,51,234,0.1) 50%, rgba(239,68,68,0.1) 100%)',
        }}
        variants={navGlowVariants}
      />

      {/* Top bar: logo + nav + toggle */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 md:gap-0">
        {/* Brand */}
        <Link to="/" className="flex items-center">
          <img
            className="h-10 w-10 sm:h-12 sm:w-12"
            src={logo}
            alt="WaveFunds Logo"
          />
          <h1 className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-lg font-bold text-transparent sm:text-xl">
            WaveFunds
          </h1>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden flex-wrap items-center gap-4 md:flex lg:gap-8 xl:gap-10">
          {navItems.map((item) => (
            <motion.li key={item.label} className="relative">
              <motion.div
                className="group relative block overflow-visible rounded-xl"
                style={{ perspective: '600px' }}
                whileHover="hover"
                initial="initial"
              >
                {/* Glow effect */}
                <motion.div
                  className="pointer-events-none absolute inset-0 z-0 rounded-2xl"
                  variants={glowVariants}
                  style={{ background: item.gradient, opacity: 0 }}
                />

                {/* Front-facing nav item */}
                <motion.div
                  className="relative z-10"
                  variants={itemVariants}
                  transition={sharedTransition}
                  style={{
                    transformStyle: 'preserve-3d',
                    transformOrigin: 'center bottom',
                  }}
                >
                  <Link
                    to={item.path}
                    className={`group flex items-center gap-2 rounded-xl px-3 py-2 text-sm text-gray-600 transition-colors sm:px-4 sm:text-base dark:text-gray-300 ${item.iconColor}`}
                  >
                    <span>{item.icon}</span>
                    <span className="font-medium">{item.label}</span>
                  </Link>
                </motion.div>

                {/* Back-facing nav item */}
                <motion.div
                  className="absolute inset-0 z-10"
                  variants={backVariants}
                  transition={sharedTransition}
                  style={{
                    transformStyle: 'preserve-3d',
                    transformOrigin: 'center top',
                    transform: 'rotateX(90deg)',
                  }}
                >
                  <Link
                    to={item.path}
                    className={`group flex items-center gap-2 rounded-xl px-3 py-2 text-sm text-gray-600 transition-colors sm:px-4 sm:text-base dark:text-gray-300 ${item.iconColor}`}
                  >
                    <span>{item.icon}</span>
                    <span className="font-medium">{item.label}</span>
                  </Link>
                </motion.div>
              </motion.div>
            </motion.li>
          ))}

          {/* Mode Toggle */}
          <li>
            <ModeToggle />
          </li>

          {/* Register Button */}
          <li>
            <Link to="/login" className="relative z-10">
              <button className="group relative z-10 cursor-pointer overflow-hidden rounded-full border-2 border-purple-500 bg-gradient-to-r from-blue-700 via-purple-500 to-pink-500 px-6 py-1.5 font-sans text-xs font-bold text-white transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/30 sm:px-8 sm:py-2 sm:text-sm md:px-10 md:py-2.5 md:text-base">
                <span className="absolute inset-0 z-0 -translate-x-full bg-gradient-to-r from-blue-950 via-purple-950 to-blue-950 transition-transform duration-300 ease-in-out group-hover:translate-x-0"></span>
                <span className="relative">Login</span>
              </button>
            </Link>
          </li>
        </ul>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 md:hidden">
          <ModeToggle />

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-lg p-2 text-gray-600 focus:outline-none dark:text-gray-300"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile nav dropdown */}
      <motion.ul
        initial={{ height: 0, opacity: 0 }}
        animate={
          isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }
        }
        transition={{ duration: 0.3 }}
        className="mt-3 flex flex-col items-center gap-3 overflow-hidden md:hidden"
      >
        {navItems.map((item) => (
          <Link
            key={item.label}
            to={item.path}
            className="w-full rounded-xl px-4 py-2 text-center text-sm text-gray-600 sm:text-base dark:text-gray-300"
          >
            {item.label}
          </Link>
        ))}
      </motion.ul>
    </motion.nav>
  );
}

export default NavBar;
