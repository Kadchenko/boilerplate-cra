import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { fetchStarships } from '@api/starships';
import { ActionTypes, State } from '@/types/starships';

const initialState: State = {
  items: [],
  isLoading: false,
  error: undefined,
};

const getStarships = createAsyncThunk(ActionTypes.FETCH_STARSHIPS, fetchStarships);

export const starshipsSlice = createSlice({
  name: 'starships',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getStarships.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getStarships.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload.results;
      })
      .addCase(getStarships.rejected, (state, action) => {
        state.error = action.error;
        state.isLoading = false;
      });
  },
});

export { getStarships };

export default starshipsSlice.reducer;
