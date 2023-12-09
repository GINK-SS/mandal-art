import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export enum QTypes {
  RESET = 'RESET',
  PRINT = 'PRINT',
}

export type ModalState = {
  isActive: boolean;
  question: string;
  qType: string;
};

const initialState = {
  isActive: false,
  question: '',
  qType: '',
} as ModalState;

export const modal = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    setActive: (state) => {
      state.isActive = true;
    },
    setInactive: (state) => {
      state.isActive = false;
    },
    setQuestion: (state, action: PayloadAction<{ qType: string; question: string }>) => {
      state.qType = action.payload.qType;
      state.question = action.payload.question;
    },
  },
});

export const { setActive, setInactive, setQuestion } = modal.actions;

export default modal.reducer;
