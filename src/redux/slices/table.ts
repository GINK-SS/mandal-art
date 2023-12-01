import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export type ElementState = {
  content: string;
  placeholder?: string;
};

export type TableState = {
  elements: ElementState[];
};

const initialState = [
  {
    elements: [
      { content: '' },
      { content: '' },
      { content: '' },
      { content: '' },
      { content: '', placeholder: '목표 1' },
      { content: '' },
      { content: '' },
      { content: '' },
      { content: '' },
    ],
  },
  {
    elements: [
      { content: '' },
      { content: '' },
      { content: '' },
      { content: '' },
      { content: '', placeholder: '목표 2' },
      { content: '' },
      { content: '' },
      { content: '' },
      { content: '' },
    ],
  },
  {
    elements: [
      { content: '' },
      { content: '' },
      { content: '' },
      { content: '' },
      { content: '', placeholder: '목표 3' },
      { content: '' },
      { content: '' },
      { content: '' },
      { content: '' },
    ],
  },
  {
    elements: [
      { content: '' },
      { content: '' },
      { content: '' },
      { content: '' },
      { content: '', placeholder: '목표 4' },
      { content: '' },
      { content: '' },
      { content: '' },
      { content: '' },
    ],
  },
  {
    elements: [
      { content: '', placeholder: '목표 1' },
      { content: '', placeholder: '목표 2' },
      { content: '', placeholder: '목표 3' },
      { content: '', placeholder: '목표 4' },
      { content: '', placeholder: '최종 목표' },
      { content: '', placeholder: '목표 5' },
      { content: '', placeholder: '목표 6' },
      { content: '', placeholder: '목표 7' },
      { content: '', placeholder: '목표 8' },
    ],
  },
  {
    elements: [
      { content: '' },
      { content: '' },
      { content: '' },
      { content: '' },
      { content: '', placeholder: '목표 5' },
      { content: '' },
      { content: '' },
      { content: '' },
      { content: '' },
    ],
  },
  {
    elements: [
      { content: '' },
      { content: '' },
      { content: '' },
      { content: '' },
      { content: '', placeholder: '목표 6' },
      { content: '' },
      { content: '' },
      { content: '' },
      { content: '' },
    ],
  },
  {
    elements: [
      { content: '' },
      { content: '' },
      { content: '' },
      { content: '' },
      { content: '', placeholder: '목표 7' },
      { content: '' },
      { content: '' },
      { content: '' },
      { content: '' },
    ],
  },
  {
    elements: [
      { content: '' },
      { content: '' },
      { content: '' },
      { content: '' },
      { content: '', placeholder: '목표 8' },
      { content: '' },
      { content: '' },
      { content: '' },
      { content: '' },
    ],
  },
] as TableState[];

export const table = createSlice({
  name: 'table',
  initialState,
  reducers: {
    setContent: (state, action: PayloadAction<{ tIdx: number; idx: number; content: string }>) => {
      state[action.payload.tIdx].elements[action.payload.idx].content = action.payload.content;

      if (action.payload.tIdx === 4) {
        state[action.payload.idx].elements[4].content = action.payload.content;
      }
    },
  },
});

export const { setContent } = table.actions;

export default table.reducer;
