import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import initialState from '../initialState';
import DealMemoInterface from '../interfaces/DealMemoInterface.ts';

const rootSlice = createSlice({
  name: 'root',
  initialState,
  reducers: {
    populateForm: (state: DealMemoInterface, action: PayloadAction) => {
      state = action.payload;
      return state;
    },
  },
});

export const { populateForm } = rootSlice.actions;

export default rootSlice.reducer;
