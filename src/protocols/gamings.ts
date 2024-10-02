import { Protocol } from './index';
import { Category } from '../constants';

const gamings: Protocol[] = [
  {
    name: 'The Plooshies',
    url: 'https://theplooshies.com/',
    logoPath: '/logos/plooshies.png',
    category: Category.Gaming,
    twitterUrl: 'https://x.com/ThePlooshies',
  },
  {
    name: 'Onchain Heroes',
    url: 'https://www.onchainheroes.xyz/',
    logoPath: '/logos/onchain_heroes.jpg',
    category: Category.Gaming,
    twitterUrl: 'https://x.com/onchainheroes',
  },
];

export { gamings };
