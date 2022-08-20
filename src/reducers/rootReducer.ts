import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import DealMemoInterface from '../interfaces/DealMemoInterface.ts';

const initialState = {
  artist: '',
  loanOut: '',
  project: '',
  company: '',
  compensation: 0,
  contigency: '',
  guarantee: '',
  dates: '',
  location: '',
  payment: '',
  wireInformation: '',
  workDay: 0,
  postProdDays: 0,
  transportation: '',
  dressingRoom: '',
  directorsMeeting: '',
  perDiem: 0,
  billingBlock: '',
  approvals: 0,
  merchandising: '',
  union: '',
  fo: '',
  idemnities: '',
  provisions: '',
  MHWardrobe: '',
  security: 0,
  assistant: 0,
  premiereTickets: 0,
  physicalCopy: '',
  signed: false,
} as DealMemoInterface;

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
