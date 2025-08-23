import CountUp from "react-countup";
import digitalCardOne from "../../assets/images/digital-card-one.png";
import digitalCardtwo from "../../assets/images/digital-card-two.png";

const Banner = () => {
    return (
        <section className="relative w-full bg-white dark:bg-[#0B0C10] text-gray-900 dark:text-white">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-12 py-20">

                {/* LEFT CONTENT */}
                <div className="md:w-1/2 text-center md:text-left">
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                        The Ultimate <br />
                        <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text dark:from-purple-400 dark:to-pink-400">
                            Online Payment
                        </span>{" "}
                        <br />
                        Solution
                    </h1>

                    <p className="mt-6 text-gray-600 dark:text-gray-400 text-sm md:text-base leading-relaxed max-w-md mx-auto md:mx-0">
                        Lorem ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry's standard dummy text
                        ever since the 1500s.
                    </p>
                    <button className="max-sm:w-full mt-6 px-6 py-3 relative inline-block rounded-full   text-white dark:text-white  text-base font-bold border-2 border-purple-500 overflow-hidden bg-black z-10 cursor-pointer font-sans group">
                        {/* Background sliding effect */}
                        <span className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 -translate-x-full transition-transform duration-300 ease-in-out z-[-1] group-hover:translate-x-0"></span>

                        {/* Button text */}
                        <span className="relative">  Get Started</span>
                    </button>

                    {/* Reviews */}
                    <div className="max-sm:hidden flex flex-col-reverse gap-3 mt-8 justify-center md:justify-start">
                        <div className="flex -space-x-3">
                            <img
                                src="https://randomuser.me/api/portraits/women/1.jpg"
                                className="w-10 h-10 rounded-full border-2 border-white dark:border-[#0B0C10]"
                            />
                            <img
                                src="https://randomuser.me/api/portraits/men/2.jpg"
                                className="w-10 h-10 rounded-full border-2 border-white dark:border-[#0B0C10]"
                            />
                            <img
                                src="https://randomuser.me/api/portraits/women/3.jpg"
                                className="w-10 h-10 rounded-full border-2 border-white dark:border-[#0B0C10]"
                            />
                            <h1 className="w-10 h-10 rounded-full border border-black text-sm bg-white p-2 font-semibold dark:border-[#0B0C10]" >
                                <CountUp end={5} duration={2} separator="," />k+
                            </h1>
                        </div>
                        <span className="text-sm text-gray-700 dark:text-gray-300">
                            Over <span className="font-bold text-gray-900 dark:text-white">  <CountUp end={5000} duration={2} separator="," />+</span> Reviews
                        </span>
                    </div>
                </div>

                {/* RIGHT CONTENT */}
                <div className="relative md:w-1/2 flex justify-center mt-12 md:mt-0 max-sm:py-5">
                    {/* Glow Effect */}
                    <div className="absolute w-[600px] h-[450px] bg-purple-500 dark:bg-purple-700 rounded-full blur-[180px] opacity-50"></div>

                    {/* Top Card */}
                    <img
                        src={digitalCardOne}
                        alt="Digital Card One"
                        className="relative w-72 md:w-[500px] -bottom-10 -left-5 rotate-[30deg] drop-shadow-2xl"
                    />

                    {/* Bottom Card */}
                    <img
                        src={digitalCardtwo}
                        alt="Digital Card Two"
                        className="absolute w-72 md:w-[500px] bottom-10 -left-10 -rotate-[30deg] drop-shadow-2xl"
                    />
                </div>


                {/* Stats Section */}
                <div className="max-w-4xl mx-auto flex flex-col max-sm:flex-row items-center justify-between gap-10 max-sm:gap-5 text-center px-6 py-12">
                    <div className="flex-1">
                        <h2 className="text-3xl max-sm:text-xl font-bold text-gray-900 dark:text-white">  <CountUp end={93} duration={2} separator="," />+</h2>
                        <p className="text-gray-600 dark:text-gray-400 max-sm:text-sm">Satisfied user</p>
                    </div>
                    <div className="flex-1">
                        <h2 className="text-3xl font-bold max-sm:text-xl text-gray-900 dark:text-white">  <CountUp end={4.9} duration={2} decimals={1} />/5</h2>
                        <p className="text-gray-600 dark:text-gray-400 max-sm:text-sm">Client Rating</p>
                    </div>
                    <div className="flex-1">
                        <h2 className="text-3xl font-bold max-sm:text-xl text-gray-900 dark:text-white">  <CountUp end={99} duration={2} separator="," /></h2>
                        <p className="text-gray-600 dark:text-gray-400 max-sm:text-sm">Secure Payments</p>
                    </div>
                </div>


            </div>


        </section>

    );
};

export default Banner;
