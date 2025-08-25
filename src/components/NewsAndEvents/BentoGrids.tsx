import { BentoGrid, BentoGridItem } from '@/components/ui/bento-grid';
import onlineBankingOne from '../../assets/images/onlinebankingone.jpg';
import onlineBankingTwo from '../../assets/images/onlinebanking 2.jpg';
import onlineBankingThree from '../../assets/images/onlinebanking3.jpg';

const items = [
  {
    title: 'Wallet Launch Event',
    description:
      'Celebrate the official launch of our new digital wallet with exciting features and rewards.',
    header: (
      <img
        src={onlineBankingOne}
        alt="Wallet Launch"
        className="h-auto w-full rounded-lg"
      />
    ),
  },
  {
    title: 'Security Upgrade Announcement',
    description:
      'Learn about the latest security enhancements to keep your funds safe and transactions secure.',
  },
  {
    title: 'Cashback Campaign',
    description:
      'Join our latest cashback campaign and get rewards on every transaction made using the wallet.',
    header: (
      <img
        src={onlineBankingThree}
        alt="Cashback Campaign"
        className="h-auto w-full rounded-lg"
      />
    ),
  },
  {
    title: 'Mobile App Release',
    description:
      'Download our new mobile app for a seamless digital wallet experience on the go.',
    header: (
      <img
        src={onlineBankingTwo}
        alt="Mobile App"
        className="h-auto w-230 rounded-lg"
      />
    ),
  },
  {
    title: 'Financial Literacy Workshop',
    description:
      'Attend our workshop to learn tips and tricks for managing digital finances effectively.',
  },
];

export default function BentoGrids() {
  return (
    <div className="relative mx-auto max-w-6xl">
      {/* Background circle */}
      <div className="absolute top-1/4 -left-32 -z-10 h-[450px] w-[600px] rounded-full bg-purple-500 opacity-50 blur-[180px] dark:bg-purple-700"></div>

      {/* Grid */}
      <BentoGrid>
        {items.map((item, i) => (
          <BentoGridItem 
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            className={i === 3 || i === 6 ? 'md:col-span-2' : ''}
          />
        ))}
      </BentoGrid>
    </div>
  );
}

