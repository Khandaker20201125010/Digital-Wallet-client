import BentoGrids from './BentoGrids';
const NewsAndEvents = () => {
  return (
    <div className="px-6 py-16 font-sans text-gray-900 dark:text-white">
      {/* Section Heading */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold">Latest News & Events</h1>
        <p className="mt-2 text-gray-500 dark:text-gray-400">
          Stay updated with our latest news and events
        </p>
      </div>

     <div>
        <BentoGrids></BentoGrids>
     </div>
    </div>
  );
};

export default NewsAndEvents;
