import Marquee from 'react-fast-marquee';
import partnerlogo1 from '../../assets/images/partnerlogo1.svg';
import partnerlogo2 from '../../assets/images/partnerlogo2.svg';
import partnerlogo3 from '../../assets/images/partnerlogo3.svg';
import partnerlogo4 from '../../assets/images/partnerlogo4.svg';
const logos = [
  { id: 1, src: partnerlogo1 , alt: 'Partner 1' },
  { id: 2, src: partnerlogo2 , alt: 'Partner 2' },
  { id: 3, src: partnerlogo3 , alt: 'Partner 3' },
  { id: 4, src:  partnerlogo4 , alt: 'Partner 4' },
];

export default function BannerFooter() {
  return (
    <div className="py-12">
  
      <div className="mb-8 flex items-center justify-center">
       
        <div className="h-[1px] flex-grow bg-gradient-to-r from-purple-600 via-indigo-500 to-blue-600 dark:from-purple-800 dark:via-gray-700 dark:to-purple-800" />

      
        <h2 className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text px-4 text-center text-xl font-semibold text-transparent">
          Our Solution Partners
        </h2>

     
        <div className="h-[1px] flex-grow bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 dark:from-purple-800 dark:via-gray-700 dark:to-purple-800" />
      </div>

      {/* Marquee */}
      <Marquee gradient={false} speed={100} pauseOnHover={true}>
        <div className="flex items-center justify-around gap-40">
          {logos.map((logo) => (
            <img
              key={logo.id}
              src={logo.src}
              alt={logo.alt}
              className="h-12 w-auto object-contain transition hover:grayscale-0"
            />
          ))}
        </div>
      </Marquee>
    </div>
  );
}
