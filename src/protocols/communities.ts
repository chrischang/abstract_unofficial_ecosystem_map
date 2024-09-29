import { Protocol } from './index';
import { Category } from '../constants';

const communities: Protocol[] = [
  {
    name: 'Abstract Ecosystem',
    url: 'https://www.abs.xyz',
    logoPath: '/logos/abstract_ecosystem.jpg',
    category: Category.Community,
    twitterUrl: 'https://x.com/Abstract_Eco',
  },
  {
    name: 'Abstract Europe',
    url: 'https://discord.com/invite/abstractchain',
    logoPath: '/logos/abstract_europe.jpg',
    category: Category.Community,
    twitterUrl: 'https://x.com/AbstractEurope',
  },
  {
    name: 'Abstract France',
    url: 'https://t.me/abstractfrance',
    logoPath: '/logos/abstract_france.jpg',
    category: Category.Community,
    twitterUrl: 'https://x.com/AbstractFrance_',
  },
];
export { communities };
