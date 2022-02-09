import http from './index';

import { FetchStarshipsResponse } from '@/types/starships';

const fetchStarships = () => http.get<FetchStarshipsResponse>('/starships');

export { fetchStarships };
