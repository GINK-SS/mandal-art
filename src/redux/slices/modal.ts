import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export type ModalState = {
  isActive: boolean;
  question: string;
};

const initialState = {
  isActive: false,
  question: '',
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
    setQuestion: (state, action: PayloadAction<{ question: string }>) => {
      state.question = action.payload.question;
    },
  },
});

export const { setActive, setInactive, setQuestion } = modal.actions;

export default modal.reducer;
