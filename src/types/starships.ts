import { SerializedError } from '@reduxjs/toolkit';

export interface FetchStarshipsResponse {
  count: number;
  next: string;
  previous: null;
  results: Starship[];
}

export enum ActionTypes {
  FETCH_STARSHIPS = 'starships/FETCH_STARSHIPS',
}

export interface Starship {
  MGLT: string;
  cargo_capacity: string;
  consumables: string;
  cost_in_credits: string;
  created: string;
  crew: string;
  edited: string;
  hyperdrive_rating: string;
  length: string;
  manufacturer: string;
  max_atmosphering_speed: string;
  model: string;
  name: string;
  passengers: number;
  films: string[];
  pilots: [];
  starship_class: string;
  url: string;
}

export interface State {
  items: Starship[];
  isLoading: boolean;
  error?: SerializedError;
}
