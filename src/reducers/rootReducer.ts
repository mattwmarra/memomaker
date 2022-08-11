import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import DealMemoInterface from '../DealMemoInterface.ts';

const initialState: DealMemoInterface = {
  artist: '',
  loanOut: '',
  project: '',
  company: '',
  compensation: {
    numerical: 0,
    textual: ''
  },
  contigency: '',
  guarantee: '',
  dates: [Date],
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
  signed : false
}

const rootSlice = createSlice({
  name: 'root',
  initialState,
  reducers: {
    updateArtist: (state: DealMemoInterface, action: PayloadAction<string>) => {
      state.artist = action.payload;
    },
    updateProjectName: (state: DealMemoInterface, action: PayloadAction<string>) => {
      state.projectName = action.payload;
    }
  },
})

export default rootSlice.reducer;
