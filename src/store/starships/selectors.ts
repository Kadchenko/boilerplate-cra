import { createSelector } from 'reselect';

import { RootState } from '@store';
import { Starship } from '@/types/starships';

const starshipsSelector = (state: RootState) => state.starships;
const starshipsItemsSelector = (state: RootState) => state.starships.items;

const smallStarshipsSelector = createSelector(starshipsItemsSelector, (items: Starship[]) =>
  items.filter((item: Starship) => item.passengers < 100000)
);

export { smallStarshipsSelector, starshipsSelector };
