import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export type ElementState = {
  id: number;
  content: string;
  placeholder?: string;
};

export type TableState = {
  tId: number;
  elements: ElementState[];
};

const initialState = [
  {
    tId: 0,
    elements: [
      { id: 0, content: '' },
      { id: 1, content: '' },
      { id: 2, content: '' },
      { id: 3, content: '' },
      { id: 4, content: '', placeholder: '목표 1' },
      { id: 5, content: '' },
      { id: 6, content: '' },
      { id: 7, content: '' },
      { id: 8, content: '' },
    ],
  },
  {
    tId: 1,
    elements: [
      { id: 0, content: '' },
      { id: 1, content: '' },
      { id: 2, content: '' },
      { id: 3, content: '' },
      { id: 4, content: '', placeholder: '목표 2' },
      { id: 5, content: '' },
      { id: 6, content: '' },
      { id: 7, content: '' },
      { id: 8, content: '' },
    ],
  },
  {
    tId: 2,
    elements: [
      { id: 0, content: '' },
      { id: 1, content: '' },
      { id: 2, content: '' },
      { id: 3, content: '' },
      { id: 4, content: '', placeholder: '목표 3' },
      { id: 5, content: '' },
      { id: 7, content: '' },
      { id: 7, content: '' },
      { id: 8, content: '' },
    ],
  },
  {
    tId: 3,
    elements: [
      { id: 0, content: '' },
      { id: 1, content: '' },
      { id: 2, content: '' },
      { id: 3, content: '' },
      { id: 4, content: '', placeholder: '목표 4' },
      { id: 5, content: '' },
      { id: 6, content: '' },
      { id: 7, content: '' },
      { id: 8, content: '' },
    ],
  },
  {
    tId: 4,
    elements: [
      { id: 0, content: '', placeholder: '목표 1' },
      { id: 1, content: '', placeholder: '목표 2' },
      { id: 2, content: '', placeholder: '목표 3' },
      { id: 3, content: '', placeholder: '목표 4' },
      { id: 4, content: '', placeholder: '최종 목표' },
      { id: 5, content: '', placeholder: '목표 5' },
      { id: 6, content: '', placeholder: '목표 6' },
      { id: 7, content: '', placeholder: '목표 7' },
      { id: 8, content: '', placeholder: '목표 8' },
    ],
  },
  {
    tId: 5,
    elements: [
      { id: 0, content: '' },
      { id: 1, content: '' },
      { id: 2, content: '' },
      { id: 3, content: '' },
      { id: 4, content: '', placeholder: '목표 5' },
      { id: 5, content: '' },
      { id: 6, content: '' },
      { id: 7, content: '' },
      { id: 8, content: '' },
    ],
  },
  {
    tId: 6,
    elements: [
      { id: 0, content: '' },
      { id: 1, content: '' },
      { id: 2, content: '' },
      { id: 3, content: '' },
      { id: 4, content: '', placeholder: '목표 6' },
      { id: 5, content: '' },
      { id: 6, content: '' },
      { id: 7, content: '' },
      { id: 8, content: '' },
    ],
  },
  {
    tId: 7,
    elements: [
      { id: 0, content: '' },
      { id: 1, content: '' },
      { id: 2, content: '' },
      { id: 3, content: '' },
      { id: 4, content: '', placeholder: '목표 7' },
      { id: 5, content: '' },
      { id: 6, content: '' },
      { id: 7, content: '' },
      { id: 8, content: '' },
    ],
  },
  {
    tId: 8,
    elements: [
      { id: 0, content: '' },
      { id: 1, content: '' },
      { id: 2, content: '' },
      { id: 3, content: '' },
      { id: 4, content: '', placeholder: '목표 8' },
      { id: 5, content: '' },
      { id: 6, content: '' },
      { id: 7, content: '' },
      { id: 8, content: '' },
    ],
  },
] as TableState[];

export const table = createSlice({
  name: 'table',
  initialState,
  reducers: {
    setContent: (state, action: PayloadAction<{ tId: number; id: number; content: string }>) => {
      const targetTable = state.find((table) => table.tId === action.payload.tId) as TableState;
      const targetElement = targetTable.elements.find(
        (element) => element.id === action.payload.id
      ) as ElementState;

      targetElement.content = action.payload.content;

      if (targetTable.tId === 4) {
        state[targetElement.id].elements[4].content = action.payload.content;
      }
    },
  },
});

export const { setContent } = table.actions;

export default table.reducer;
