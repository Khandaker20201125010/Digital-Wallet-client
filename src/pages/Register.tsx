import logo from '../assets/images/logo.png';
import loginResisterimg from '../assets/images/loginResisterimg.png';
import { Link } from 'react-router';
import RegisterForm from '@/modules/RegisterForm';

const Register = () => {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="relative hidden lg:block">
        <div
          data-aos="fade-right"
          data-aos-duration="1500"
          className="absolute h-[450px] w-[600px] rounded-full bg-purple-500 opacity-50 blur-[180px] dark:bg-purple-700"
        ></div>
        <img
          src={loginResisterimg}
          alt="Image"
          className="absolute inset-0 h-full w-full object-contain dark:brightness-[0.8]"
        />
      </div>
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div
          data-aos="fade-down"
          data-aos-duration="1500"
          className="flex justify-center gap-2 md:justify-end"
        >
          <Link to="/" className="flex items-center gap-2 font-medium">
            <img className="h-16 w-16" src={logo} alt="" />
            <h1 className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-3xl font-bold text-transparent">
              WaveFunds
            </h1>
          </Link>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="1500"
          className="flex flex-1 items-center justify-center"
        >
          <div className="w-full max-w-xs">
            <RegisterForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
