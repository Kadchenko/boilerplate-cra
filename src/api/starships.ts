import http from './index';

import { FetchStarshipsResponse } from '@commonTypes/starships';

const fetchStarships = () => http.get<FetchStarshipsResponse>('/starships');

export { fetchStarships };
