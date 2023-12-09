import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export type ElementState = {
  content: string;
  placeholder?: string;
};

export type TableState = {
  isActive: boolean;
  elements: ElementState[];
};

export type ProjectState = {
  title: string;
  tables: TableState[];
};

const initialState = {
  title: '',
  tables: [
    {
      isActive: false,
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
      isActive: false,
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
      isActive: false,
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
      isActive: false,
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
      isActive: true,
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
      isActive: false,
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
      isActive: false,
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
      isActive: false,
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
      isActive: false,
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
  ],
} as ProjectState;

export const table = createSlice({
  name: 'table',
  initialState,
  reducers: {
    setTitle: (state, action: PayloadAction<{ title: string }>) => {
      state.title = action.payload.title;
    },

    setContent: (state, action: PayloadAction<{ tIdx: number; idx: number; content: string }>) => {
      state.tables[action.payload.tIdx].elements[action.payload.idx].content =
        action.payload.content;

      if (action.payload.tIdx === 4) {
        state.tables[action.payload.idx].elements[4].content = action.payload.content;
      }
    },

    setActive: (state, action: PayloadAction<{ tIdx: number; idx: number; content: string }>) => {
      if (action.payload.tIdx === 4) {
        if (action.payload.content) {
          state.tables[action.payload.idx].isActive = true;
        } else if (action.payload.idx !== 4 && !action.payload.content) {
          state.tables[action.payload.idx].isActive = false;
        }
      }
    },

    initialize: (state) => {
      state.title = initialState.title;
      state.tables = initialState.tables;
    },

    setLocalStorage: (state) => {
      window.localStorage.setItem('elements', JSON.stringify(state));
    },

    getLocalStorage: (state, action: PayloadAction<{ saved: string }>) => {
      const parseSaved: ProjectState = JSON.parse(action.payload.saved);

      state.title = parseSaved.title;
      state.tables = parseSaved.tables;
    },
  },
});

export const { setTitle, setContent, setActive, initialize, setLocalStorage, getLocalStorage } =
  table.actions;

export default table.reducer;
