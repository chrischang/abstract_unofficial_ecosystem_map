import { Category } from '../constants';
import { bridges } from './bridges';
import { defi } from './defi';
import { gamings } from './gamings';
import { indexer } from './indexer';
import { nft } from './nft';
import { social } from './social';
import { wallet } from './wallet';
import { rwa } from './rwa';

export type Protocol = {
  logoPath: string;
  url: string;
  name: string;
  category: Category;
  twitterUrl: string;
};

const protocols: Protocol[] = [
  ...bridges,
  ...defi,
  ...gamings,
  ...indexer,
  ...nft,
  ...social,
  ...wallet,
  ...rwa,
];

// console.log(protocols, 'protocol');

export { protocols };
