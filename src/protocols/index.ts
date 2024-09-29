import { Category } from '../constants';
import { bridges } from './bridges';
import { defi } from './defi';
import { gamings } from './gamings';
import { indexer } from './indexer';
import { paymaster } from './paymaster';
import { nft } from './nft';
import { social } from './social';
import { wallet } from './wallet';
import { rwa } from './rwa';
import { prediction } from './prediction';
import { socialFiGame } from './socialfigame';
import { communities } from './communities';

export type Protocol = {
  logoPath: string;
  url: string;
  name: string;
  category: Category;
  twitterUrl: string;
};

const protocols: Protocol[] = [
  ...bridges,
  ...communities,
  ...defi,
  ...prediction,
  ...gamings,
  ...indexer,
  ...paymaster,
  ...nft,
  ...social,
  ...wallet,
  ...rwa,
  ...socialFiGame,
];

export { protocols };
